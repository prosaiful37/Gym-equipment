import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const InventoryDetails = () => {
  const { inventoryId } = useParams();
  const navigate = useNavigate()
  const [inventories, setInventory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/inventories/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventoryId]);




  //Quentity deacase
  const quentityDecrease = () => {
    const privousQuentity = inventories.quantity;
    console.log(privousQuentity)
   
    
  }


  // navigate management inventory
  const navigateToManagement = () => {
    navigate('/manageinventory')
  }



















  //   add quentity form
  const handleDeliverdForm = (event) => {
    event.preventDefault();

    const QuentityValue = event.target.quentityAdd.value;
    const newQuentityValue = parseInt(QuentityValue);

    if (newQuentityValue < 0) {
      alert("Not allow nagetive value");
      return;
    }

    const priviousQuentity = parseInt(inventories?.quantity);
    const totalQuentity = newQuentityValue + priviousQuentity;
    // console.log(totalQuentity);
    const quentityUpdate = { totalQuentity };

    //quentity add
    fetch(`http://localhost:5000/inventories/${inventoryId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(quentityUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.success){
          console.log('data update', data);
          setInventory(data)
        }
      });
  };

  return (
    <div className="">
      <h2 className="text-center font-bold italic text-4xl my-5">
        Inventory Details
      </h2>
      <p className="text-center my-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
        Excepturi fugiat aliquam porro quo beatae quisquam libero maxime, sint
        dicta accusamus.
      </p>
      <div class="hero h-min-screen">
        <div class="hero-content">
          <div className="grid md:grid-cols-2 gap-2">
            <div class="card w-96 bg-base-100 shadow-xl rounded-none">
              <figure class="px-10 pt-10">
                <img src={inventories.img} alt="Shoes" class="rounded-xl" />
              </figure>
              <hr className="bg-primary " />
              <div class="card-body">
                <h2 class="card-title">{inventories.name}</h2>
                <small className="font-bold">{inventories.discription}</small>
                <h4 className="font-bold">
                  Price:{" "}
                  <span className="text-primary">${inventories.price}</span>
                </h4>
                <h4 className="font-bold">
                  Quentity :{" "}
                  <span className="text-primary">{inventories.quantity}</span>
                </h4>
                <h2 className="font-bold">
                  Supplier: {inventories.supplierName}
                </h2>
                <div class="card-actions ">
                  <button onClick={quentityDecrease} class="btn btn-secondary rounded-none">
                    Deliverd
                  </button>
                </div>
              </div>
            </div>
            {/* from add inventory quenity */}
            <div class="card p-15 items-center bg-base-100 shadow-xl rounded-none">
              <div class="card-body">
                <h2 class="card-title font-bold">Deliverd Inventory Item</h2>
                <form onSubmit={handleDeliverdForm} action="">
                  <div class="form-control">
                    <div class="input-group">
                      <input
                        type="number"
                        name="quentityAdd"
                        class="input input-bordered"
                      />
                      <button class="btn btn-secondary hover:bg-primary">
                        ReStock
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card-actions ">
              <button onClick={navigateToManagement} class="btn btn-primary btn-block">
                Mangae Inventory
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
