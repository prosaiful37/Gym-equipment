import React from "react";
import { useNavigate } from "react-router-dom";

const InventoryItems = ({ inventory }) => {
  const {_id, name, img, discription, price, quantity, supplierName } = inventory;
  const navigate = useNavigate()



  // naviage anotherpage
  const navigateToInvnentoryDetails = (id) =>{
    navigate(`/inventory/${id}`)
  }


  return (
    <div class="card hover:w-full hover:h-full bg-base-100 hover:border-primary hover:shadow-xl hover:ease-in duration-400 hover:transition duration-400 rounded-none border ">
      <figure><img className="w-80 hover:ease-in duration-300" src={img} alt="Shoes" /></figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{discription}</p>
        <h4 className="font-bold border p-2">Price: <span className="text-primary">${price}</span></h4>
        <h4 className="font-bold">Quentity : <span className="text-primary">{quantity}</span></h4>
        <h4 className="font-bold">Supplier <span className="text-primary">{supplierName}</span></h4>
        <hr/>
          <button onClick={() => navigateToInvnentoryDetails(_id)} class="btn btn-secondary btn-block hover:btn-primary rounded-none">Stock Update </button>
        
      </div>
    </div>
  );
};

export default InventoryItems;
