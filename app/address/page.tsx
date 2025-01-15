'use client'
import { useAccount } from "wagmi";

const Address = () => {
    const {address} = useAccount();
    return <div>
        <h1>Address</h1>
        <p>{address}</p>
    </div>
}

export default Address;