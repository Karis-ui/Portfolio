'use client'
import { useState, useMemo } from 'react';
import { Shield, Lock, Binary, Fingerprint, Hash, Key, Eye, EyeOff, Copy, Check, Zap, AlertTriangle, FlaskConical } from 'lucide-react';

export default function Lab() {
    return (
        <section id="lab" className="py-20 relative font-mono">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="flex items-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-100 uppercase tracking-widest">
                        <span className="text-[#08f7fe] mr-2">05.</span>Security Lab.
                    </h2>
                    <div className="h-px bg-gray-800 flex-grow ml-6"></div>
                </div>

                <div>
                    <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                        This section is reserved for R&D. Expect proof-of-concepts,security tools, weird Cryptography experiments,encrypt,crack and learn.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <PasswordStrengthMeter />
                    <HashGenerator />
                    <Base4Tool />
                    <ThreatScanner />
                </div>
            </div>
        </section>
    );
}

function PasswordStrengthMeter() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const calscore = (pass) => {
        if (!pass) return { strength: "", s: 0, color: "gray" };
        let s = 0;
        if (pass.length >= 8) s++;
        if (pass.length >= 12) s++;
        if (/[A-Z]/.test(pass)) s++;
        if (/[0-9]/.test(pass)) s++;
        if (/[!@#$%^&*]/.test(pass)) s++;

        let strength = "";
        let color = "";
        if (s <= 1) { strength = "Weak"; color = "red"; }
        else if (s <= 2) { strength = "Medium"; color = "yellow"; }
        else if (s <= 3) { strength = "Strong"; color = "green"; }
        else { strength = "Very Strong"; color = "blue"; }
        return { strength, s, color };
    };

    const currentScore = calscore(password);
    const { strength, color } = currentScore;
    const bars = () => {
        if (password.length === 0) return "";
        if (password.length < 6) return "Instantly";
        if (password.length < 8) return "~2 minutes";
        if (password.length < 10) return "~6 hours";
        if (/[^A-Za-z0-9]/.test(password) && password.length > 10) return "~3 months";
        return "~3 months";
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
                <Lock className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold">Password Strength Meter</h2>
            </div>

            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter a password..."
                    className="w-full p-3 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500"
                >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
            </div>

            {password && (
                <>
                    <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                            <span>Strength: </span>
                            <span className={`font-bold text-${color}-600`}>{strength}</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className={`h-full bg-${color}-500 transition-all duration-300`} style={{ width: `${(currentScore.s / 5) * 100}%` }}
                            />
                        </div>
                    </div>

                    <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm">
                        <div className="flex justify-between">
                            <span>Time to crack:</span>
                            <span className="font-mono">{bars()}</span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span>Length:</span>
                            <span>{password.length} characters</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

function HashGenerator() {
    const [input, setInput] = useState("");
    const [hashType, setHashType] = useState("SHA-256");
    const [hashValue, setHashValue] = useState("");

    const generateHash = async () => {
        if (!input) return;
        const encoder = new TextEncoder();
        const data = encoder.encode(input);

        if (hashType === "MD5") {
            let hash = 0;
            for (let i = 0; i < input.length; i++) {
                hash = ((hash << 5) - hash) + input.charCodeAt(i);
                hash |= 0;
            }
            setHashValue(hash.toString(16));
        } else {
            const hashbuffer = await crypto.subtle.digest(
                hashType === "SHA-1" ? "SHA-1" : "SHA-256",
                data
            );
            const hashArray = Array.from(new Uint8Array(hashbuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            setHashValue(hashHex);
        }
    };
    const copyToClipboard = () => {
        navigator.clipboard.writeText(hashValue);
        alert("Copied!!");
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
                <Hash className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold">Hash Generator</h2>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Input Text</label>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter text to hash..."
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
                    rows="3"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Hash Type</label>
                <select
                    value={hashType}
                    onChange={(e) => setHashType(e.target.value)}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
                >
                    <option value="MD5">MD5</option>
                    <option value="SHA-1">SHA-1</option>
                    <option value="SHA-256">SHA-256</option>
                </select>
            </div>

            <button
                onClick={generateHash}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
            >
                Generate Hash
            </button>

            {hashValue && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Hash Value:</span>
                        <button
                            onClick={copyToClipboard}
                            className="text-blue-600 hover:text-blue-700"
                        >
                            <Copy className="w-4 h-4" />
                        </button>
                    </div>
                    <code className="text-sm text-gray-700 dark:text-gray-300 break-all">
                        {hashValue}
                    </code>
                </div>
            )}
        </div>
    );
}

function Base4Tool() {
    const [input, setInput] = useState("");
    const [mode, setMode] = useState("encode");
    const [output, setOutput] = useState("");

    const processBase64 = () => {
        if (!input) return;
        try {
            if (mode === 'encode') {
                setOutput(btoa(input));
            } else {
                setOutput(atob(input));
            }
        } catch {
            setOutput("Invalid Base64 string.....");
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(output);
        alert("Copied to clipboard!");
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
                <Hash className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold">Base64 Tool</h2>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Input Text</label>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter text to encode or decode..."
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
                    rows="3"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Mode</label>
                <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
                >
                    <option value="encode">Encode (Text → Base64)</option>
                    <option value="decode">Decode (Base64 → Text)</option>
                </select>
            </div>

            <button
                onClick={processBase64}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
            >
                Process Base64
            </button>

            {output && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Output:</span>
                        <button
                            onClick={copyToClipboard}
                            className="text-blue-600 hover:text-blue-700"
                        >
                            <Copy className="w-4 h-4" />
                        </button>
                    </div>
                    <code className="text-sm text-gray-700 dark:text-gray-300 break-all">
                        {output}
                    </code>
                </div>
            )}
        </div>
    );
}

function ThreatScanner() {
    const [ip, setIp] = useState("");
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState(null);
    const [mock, setMock] = useState(null);

    const scanIP = async () => {
        if (!ip) return;
        setScanning(true);
        setResult(null);

        try {
            const response = await fetch(`https://api.abuseipdb.com/api/v2/check`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Key": "[ENCRYPTION_KEY]"
                },
                params: {
                    "ipAddress": ip,
                    "maxAgeInDays": 60
                }
            });
            const data = await response.json();
            setResult(data.data);
            setMock({
                location: `${Math.floor(Math.random() * 90) + 1}°N,${Math.floor(Math.random() * 180) - 90}°E`,
                ports: ["22 (SSH)", "80 (HTTP)", "443 (HTTPS)", "3306 (MySQL)", "5432 (PostgreSQL)", "21 (FTP)", "23 (Telnet)", "110 (POP3)", "143 (IMAP)", "25 (SMTP)"]
            })
        } catch (error) {
            console.error("Error scanning IP:", error);
            alert("Failed to scan IP address");
        } finally {
            setScanning(false);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-red-600" />
                <h2 className="text-xl font-bold">Threat Scanner</h2>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">IP Address</label>
                <input
                    type="text"
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                    placeholder="Enter IP address to scan..."
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-red-500"
                />
            </div>

            <button
                onClick={scanIP}
                disabled={scanning}
                className={`w-full text-white py-3 rounded-lg transition-colors mb-4 ${scanning ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
            >
                {scanning ? 'Scanning...' : 'Scan IP'}
            </button>

            {result && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Scan Results</h3>
                    <p><span className="font-medium">IP Address:</span> {result.ipAddress}</p>
                    <p><span className="font-medium">Country:</span> {mock.location}</p>
                    <p><span className="font-medium">Total Reports:</span> {result.totalReports}</p>
                    <p><span className="font-medium">Abuse Confidence:</span> {result.abuseConfidenceScore}%</p>
                    <p><span className="font-medium">Port:</span> {mock.ports.map((port, index) => (
                        <span key={index}>{port} </span>
                    ))
                    }</p>
                    <p><span className="font-medium">Is Public:</span> {result.isPublic ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>
    );
}