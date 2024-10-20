import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const EncryptionData = [
    {
        "id": "algo-001",
        "name": "Caesar Cipher",
        "category": "Classical Cryptography",
        "type": "Substitution Cipher",
        "keyType": "Symmetric",
        "encryptionType": "Monoalphabetic",
        "keySize": "1 integer",
        "blockSize": "Single character",
        "securityLevel": "Low",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "inventedYear": "100 BC",
        "description": "The Caesar Cipher is a simple substitution cipher where each letter in the plaintext is shifted by a fixed number of positions down the alphabet. It’s one of the earliest and most straightforward forms of encryption but is easily broken due to its simplicity.",
        "image": "caesar_cipher.png"
    },
    {
        "id": "algo-002",
        "name": "Playfair Cipher",
        "category": "Classical Cryptography",
        "type": "Digraph Substitution Cipher",
        "keyType": "Symmetric",
        "encryptionType": "Polygraphic",
        "keySize": "25 letters (5x5 grid)",
        "blockSize": "2 characters",
        "securityLevel": "Medium",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(n)",
        "inventedYear": "1854",
        "description": "The Playfair Cipher encrypts digraphs, or pairs of letters, using a 5x5 matrix generated from a keyword. It improves on monoalphabetic ciphers by encrypting two letters at a time, making it harder to crack. However, with modern frequency analysis, it remains insecure.",
        "image": "playfair_cipher.png"
    },
    {
        "id": "algo-003",
        "name": "Hill Cipher",
        "category": "Classical Cryptography",
        "type": "Polygraphic Cipher",
        "keyType": "Symmetric",
        "encryptionType": "Linear Algebra-based",
        "keySize": "Dependent on matrix size (typically 3x3 or 4x4)",
        "blockSize": "Variable (based on matrix size)",
        "securityLevel": "Medium",
        "timeComplexity": "O(n^3) for matrix inversion",
        "spaceComplexity": "O(n^2)",
        "inventedYear": "1929",
        "description": "The Hill Cipher is a polygraphic substitution cipher that uses linear algebra. A block of letters is treated as a vector and multiplied by an invertible matrix (the key). The Hill Cipher is secure against frequency analysis but is vulnerable to known plaintext attacks.",
        "image": "hill_cipher.png"
    },
    {
        "id": "algo-004",
        "name": "Vigenère Cipher",
        "category": "Polyalphabetic Cipher",
        "type": "Polyalphabetic Substitution",
        "keyType": "Symmetric",
        "encryptionType": "Polyalphabetic",
        "keySize": "Variable (length of keyword)",
        "blockSize": "Single character",
        "securityLevel": "Medium",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "inventedYear": "1553",
        "description": "The Vigenère Cipher is a polyalphabetic substitution cipher that uses a keyword to shift letters of the plaintext by different amounts, providing stronger encryption than monoalphabetic ciphers. It’s resistant to frequency analysis but can be broken using repeated-key attacks or advanced cryptanalysis techniques.",
        "image": "vigenere_cipher.png"
    },
    {
        "id": "algo-005",
        "name": "DES (Data Encryption Standard)",
        "category": "Modern Cryptography",
        "type": "Block Cipher",
        "keyType": "Symmetric",
        "encryptionType": "Mathematical (Feistel Network)",
        "keySize": "56 bits",
        "blockSize": "64 bits",
        "securityLevel": "Medium",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "inventedYear": "1975",
        "description": "DES is a symmetric-key block cipher that encrypts data in fixed-size blocks of 64 bits using a 56-bit key. It was once widely used but is now considered insecure due to advances in computational power, which can brute-force the key. DES uses 16 rounds of Feistel structure for encryption.",
        "image": "des_algorithm.png"
    },
    {
        "id": "algo-006",
        "name": "RSA",
        "category": "Modern Cryptography",
        "type": "Public Key Cryptosystem",
        "keyType": "Asymmetric",
        "encryptionType": "Mathematical (Prime Factorization)",
        "keySize": "1024-4096 bits",
        "blockSize": "Variable",
        "securityLevel": "High",
        "timeComplexity": "O(n^3)",
        "spaceComplexity": "O(n^2)",
        "inventedYear": "1977",
        "description": "RSA is one of the most widely used public-key cryptosystems. It is based on the mathematical challenge of factoring large prime numbers. RSA uses two keys: a public key for encryption and a private key for decryption. It is highly secure when large key sizes are used but slower compared to symmetric algorithms.",
        "image": "rsa_algorithm.png"
    }
];

  res.json(EncryptionData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
