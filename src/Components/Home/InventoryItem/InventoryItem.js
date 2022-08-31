import React, { useEffect, useState } from "react";
import InventoryItems from "./InventoryItems";

const InventoryItem = () => {
  const [inventories, setInventory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventories")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <div className=" py-8">
         <h2 className="text-center font-bold italic text-4xl my-3">Our Inventory Item</h2>
        <p className="text-center my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Excepturi fugiat aliquam porro quo beatae quisquam libero maxime, sint dicta accusamus.</p>
        <div class="hero min-h-screen ">
       
      <div class="hero-content text-center">
        
        <div class="grid md:grid-cols-3 gap-5">
        {
            inventories.slice(0, 6).map(inventory => <InventoryItems key={inventory.id} inventory={inventory}></InventoryItems> )
        }
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default InventoryItem;
