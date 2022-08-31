
import AddInventory from "./AddInventory";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const ManageInventory = () => {
  
  const [inventories, setInventory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventories")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  


    // data delete handle
    const handleDeleteItem = (id) => {
      const proceed = window.confirm("Are you sure?");
      if (proceed) {
        const url = `http://localhost:5000/inventories/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaning = inventories.filter((inventory) => inventory._id !== id);
            setInventory(remaning);
          });
      }
    }

  return (
    <div>
      <div className="py-5">
        <h2 className="text-center font-bold text-4xl italic">
          Our Manage Invenotory
        </h2>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error amet{" "}
          <br /> magni ipsam quaerat, sunt earum, reprehenderit commodi .
        </p>
      </div>
      <div className="md:px-52 py-5">
        <div class="overflow-x-auto ">
          <table class="table w-full border rounded-none">
            
            <thead>
              <tr>
                <th>Sl/no</th>
                <th>Name</th>
                <th>Picture</th>
                <th>Quentity</th>
                <th>Price</th>
                <th>Supplier-Name</th>
                <th>Remove-intentory</th>
              </tr>
            </thead>
            <tbody>
           

              {inventories.map((inventory, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{inventory.name}</td>
                  <td>
                    <img className="w-10 h-10" src={inventory.img} alt="" />
                  </td>
                  <td>{inventory.quantity}</td>
                  <td>${inventory.price}</td>
                  <td>{inventory.supplierName}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(inventory._id)}
                      class="btn btn-sm btn-secondary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <AddInventory></AddInventory>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
