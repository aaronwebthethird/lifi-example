
'use client'
import { useState } from "react";
import { DynamicConnectButton, DynamicWidget, useDynamicContext } from "../lib/dynamic";
import { useAccount, useConnectors, useSendTransaction, useSwitchChain } from "wagmi";
import { switchChain } from "viem/actions";
import Link from "next/link";

export default function Main() {
  const { sdkHasLoaded } = useDynamicContext(); // add spinner
  const [quote, setQuote] = useState<any>();
  const connectors  = useConnectors();
   const {switchChain} = useSwitchChain();
   const {isConnected, address } = useAccount();

  

  if(!sdkHasLoaded) {
  return (<div className="text-xl font-bold text-white bg-gray-800 p-4 rounded-md text-center mt-5">
    Loading...
  </div>)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center">
            <img src="/logo.png" alt="logo" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Show all the addresses</h1>
        <p className="text-lg mb-16">
         Help me :/
        </p>
        <DynamicWidget />
        <p className="mt-5">address: {address}</p>
        <p className="mt-5">isConnected: {isConnected ? 'true' : 'false'}</p>
       <p className="mt-5">connectors: {connectors.length}</p>
      <DynamicConnectButton>
        <p className="bg-blue-500 text-white p-2 rounded-md mt-5" >Connect</p>
      </DynamicConnectButton>
      </div>

      <Link href={`/address`}>
            <button className="bg-blue-500 text-white p-2 rounded-md mt-5 ">see  address</button>
        </Link>
    
    </div>
  );
}
