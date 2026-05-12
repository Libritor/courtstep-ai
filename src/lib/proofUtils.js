export async function connectSolanaWallet() {
  const provider = window.solana;

  if (provider?.isPhantom || provider?.connect) {
    const response = await provider.connect();
    return {
      address: response.publicKey.toString(),
      provider,
      isRealWallet: true,
    };
  }

  return {
    address: "8xR4mN7kP2vQ5tLw9jB3cF6gH1dS0aY4uE8iO7nK",
    provider: null,
    isRealWallet: false,
  };
}

export async function sha256Hex(buffer) {
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  return `0x${Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")}`;
}

export async function hashUploadedFile(file) {
  const buffer = await file.arrayBuffer();
  return sha256Hex(buffer);
}

export async function encryptProofPayload(payload) {
  const encoded = new TextEncoder().encode(JSON.stringify(payload));
  const key = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encoded);

  return {
    encryptedBytes: encrypted.byteLength,
    algorithm: "AES-256-GCM",
    ivHex: Array.from(iv).map((byte) => byte.toString(16).padStart(2, "0")).join(""),
  };
}

export async function signProofMessage(provider, message) {
  if (!provider?.signMessage) {
    return null;
  }

  const encodedMessage = new TextEncoder().encode(message);
  const signed = await provider.signMessage(encodedMessage, "utf8");
  return Array.from(signed.signature)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}