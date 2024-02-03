'use client';
import { useRouter } from "next/navigation"
import './page.css'
export default function Card() {
    const router = useRouter();

    return(
        <>
    <div className='navbar'>
         <p className='navbar-text'>5  Item(s) in Cart</p>
    </div>
    <div className='card-1'>
        <img className='card-image-1' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
        <p className='card-text-4'><strong>Product name:</strong> <br />
        Seller:Apple
        </p>
        <div className='card-button-3'>
        <button className='card-button-1'>-</button>
        <button className='card-button-1'>0</button>
        <button className='card-button-1'>+</button>
        </div>
        <p><strong>$898</strong> <br />
        $98 / per item
        </p>
        <button className='card-button-2'>Remove</button>
    </div>
    <div className='card-2'>
      <p className='card-text-2'><strong>Total price: </strong>$98</p>
      <p className='card-text-2'><strong>Total units: </strong>7 (units)</p>
      <p className='card-text-2'><strong>Tax:</strong>$88</p>
      <p className='card-text-3'><strong>Total price:</strong>$150</p>
      <button className='button-1'>Continue</button>
      <button className='button-2' onClick={() => router.push('./')}>Back to shop</button>
    </div>
    </>
    )
 }