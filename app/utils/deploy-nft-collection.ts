import { SolanaAgentKit } from "solana-agent-kit";
import { PublicKey } from "@solana/web3.js";

interface DeployCollectionOptions {
  name: string;
  uri: string;
  royaltyBasisPoints?: number;
}

interface DeployCollectionResponse {
  status: "success" | "error";
  message: string;
  collectionAddress?: string;
  name?: string;
  code?: string;
}

export async function deployNFTCollection(
  agent: SolanaAgentKit,
  options: DeployCollectionOptions
): Promise<DeployCollectionResponse> {
  try {
    const collection = await agent.deployCollection({
      name: options.name,
      uri: options.uri,
      royaltyBasisPoints: options.royaltyBasisPoints || 0
    });

    console.log("Collection deployed:", {
      address: collection.collectionAddress.toString(),
      name: options.name
    });

    return {
      status: "success",
      message: "Collection deployed successfully",
      collectionAddress: collection.collectionAddress.toString(),
      name: options.name
    };
  } catch (error) {
    console.error("Collection deployment failed:", error);
    
    let errorMessage = "An unknown error occurred";
    let errorCode = "UNKNOWN_ERROR";

    if (error instanceof Error) {
      errorMessage = error.message;
      if (errorMessage.includes("invalid uri")) {
        errorCode = "INVALID_URI";
      } else if (errorMessage.includes("insufficient funds")) {
        errorCode = "INSUFFICIENT_FUNDS";
      }
    }

    return {
      status: "error",
      message: errorMessage,
      code: errorCode
    };
  }
}

// Example usage
async function exampleDeployment() {
  const agent = new SolanaAgentKit(); // Initialize with appropriate parameters

  const result = await deployNFTCollection(agent, {
    name: "Awesome Art",
    uri: "https://arweave.net/collection.json",
    royaltyBasisPoints: 500 // 5% royalty
  });

  if (result.status === "success") {
    console.log(`Collection "${result.name}" deployed at address: ${result.collectionAddress}`);
  } else {
    console.error(`Deployment failed: ${result.message} (Code: ${result.code})`);
  }
}

// Uncomment the line below to run the example
// exampleDeployment().catch(console.error);

