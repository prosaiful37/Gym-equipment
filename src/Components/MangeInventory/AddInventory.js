import React, { useState } from "react";
import { toast } from "react-toastify";

const AddInventory = () => {
    const [inventories, setInventory] = useState([]);

    const handleAddInventory = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplierName = e.target.supplierName.value;
        const discription = e.target.discription.value;

        const inventory = {
            name, img, price, quantity, supplierName, discription
        };

        fetch('http://localhost:5000/inventories/', {
            method: "POST",
            headers: {
                "content-type": "application/json",
              },
            body: JSON.stringify(inventory),

        })
        .then(res => res.json())
        .then(data => {
            toast.success('Inventory Added succssfully')
            setInventory(data)
        })
        

    
    }




  return (
    <div>
      {/* <!-- The button to open modal --> */}
      <label
        for="my-modal-4"
        class="btn modal-button btn-block btn-secondary mt-2 hover:btn-primary"
      >
        {" "}
        Add Inventory Items
      </label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <h1 className="text-secondary font-bold font-4xl text-center">
            Add Your Inventory item.
          </h1>
          <div class="card flex-shrink-0 w-full max-w-sm  bg-base-100">
            <div class="card-body">
              <form onSubmit={handleAddInventory} action="">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Items-Name</span>
                  </label>
                  <input name="name" type="text" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Picture-url</span>
                  </label>
                  <input name="img" type="text" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Price</span>
                  </label>
                  <input name="price" type="number" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Quantity</span>
                  </label>
                  <input name="quantity" type="number" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Supplier-Name</span>
                  </label>
                  <input name="supplierName" type="text" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Description</span>
                  </label>
                  <textarea name="discription"
                    class="textarea textarea-bordered"
                    placeholder="description"
                  ></textarea>
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-secondary">Add</button>
                </div>
              </form>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
};

export default AddInventory;
