
// 'use client'
// import { useState } from "react";
// import { DynamicWidget, useDynamicContext } from "../lib/dynamic";
// import { useAccount, useConnectors, useSendTransaction, useSwitchChain } from "wagmi";
// import { switchChain } from "viem/actions";

// export default function Main() {
//   const { sdkHasLoaded } = useDynamicContext(); // add spinner
//   const [isQuoteLoading, setIsQuoteLoading] = useState(false);
//   const [quote, setQuote] = useState<any>();

// const connectors  = useConnectors();

//    const {switchChain} = useSwitchChain();
//    const {isConnected, address } = useAccount();

//   const {
//     data: transactionReceipt,
//     isError: isSendTransactionError,
//     error: SendTransactionError,
//     sendTransaction,
//   } = useSendTransaction();

//   const fetchQuote = async () => {
//     switchChain({ chainId:  42161});
//     const url = 'https://li.quest/v1/quote/toAmount?fromChain=42161&toChain=137&fromToken=0x912CE59144191C1204E64559FE8253a0e49E6548&toToken=0xc2132D05D31c914a87C6611C10748AEb04B58e8F&fromAddress=0xEA730d3507d98949ef9d986Ab3118dA0cEAEfF92&toAddress=0xEA730d3507d98949ef9d986Ab3118dA0cEAEfF92&toAmount=5000000';
  
//     setIsQuoteLoading(true);
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data);
//       setIsQuoteLoading(false);
//       setQuote(data);
//       return;
//     } catch (error) {
//       console.error('Fetch error:', error);
//       throw error;
//     }

//   };

//   const swap = async () => {
//     if (!quote) {
//       console.error('No quote available');
//       return;
//     }
//     sendTransaction(
//       {
//         data: quote.transactionRequest.data as `0x${string}`,
//         to: quote.transactionRequest.to as `0x${string}`,
//         value: BigInt(quote.transactionRequest.value),
//         chainId: quote.transactionRequest.chainId,
//         gas: BigInt(quote.transactionRequest.gasLimit),
//       },
//       { onError: error => console.error(error) }
//     );
//   };

//   if(!sdkHasLoaded || isQuoteLoading) {
//   return (<div className="text-xl font-bold text-white bg-gray-800 p-4 rounded-md text-center mt-5">
//     Loading...
//   </div>)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-white">
//       <div className="flex flex-col items-center justify-center text-center">
//         <div className="mb-6">
//           <div className="inline-flex items-center justify-center">
//             <img src="/logo.png" alt="logo" />
//           </div>
//         </div>
//         <h1 className="text-4xl font-bold mb-4">Swap all the tokens</h1>
//         <p className="text-lg mb-16">
//          Help me :/
//         </p>
//         <p>address: {address}</p>
//         <p>isConnected: {isConnected ? 'true' : 'false'}</p>
//        <p>connectors: {connectors.length}</p>
//        <DynamicWidget />
//       </div>
//       <div className="flex mt-16 space-x-4 ">
//           <button className="font-semibold" onClick={fetchQuote}>Quote</button>
//       </div>
//       <div>
//         {quote && (
//           <div className="flex mt-16 space-x-4 ">
//             <button className="font-semibold" onClick={swap}>Swap</button>
//           </div>
//         )}
//       </div>
    
//     </div>
//   );
// }
