module.exports = {

"[externals]/next/dist/compiled/next-server/pages.runtime.dev.js [external] (next/dist/compiled/next-server/pages.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages.runtime.dev.js", () => require("next/dist/compiled/next-server/pages.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-runtime", () => require("react/jsx-runtime"));

module.exports = mod;
}}),
"[externals]/react [external] (react, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/next/head.js [external] (next/head.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/head.js", () => require("next/head.js"));

module.exports = mod;
}}),
"[project]/styles/ChatBot.module.css [ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "chatBox": "ChatBot-module__jstDya__chatBox",
  "chatContainer": "ChatBot-module__jstDya__chatContainer",
  "chatInput": "ChatBot-module__jstDya__chatInput",
  "inputRow": "ChatBot-module__jstDya__inputRow",
  "sendButton": "ChatBot-module__jstDya__sendButton",
});
}}),
"[project]/components/ChatBot.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ChatBot$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/ChatBot.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
'use client';
;
;
;
const ChatBot = ()=>{
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [chat, setChat] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const handleSend = async ()=>{
        if (!message.trim()) return;
        const newChat = [
            ...chat,
            {
                role: 'user',
                content: message
            }
        ];
        setChat(newChat);
        setMessage('');
        setChat((prev)=>[
                ...prev,
                {
                    role: 'bot',
                    content: 'Typing...'
                }
            ]);
        setTimeout(()=>{
            const botReply = generateAIResponse(message);
            setChat((prev)=>[
                    ...prev.slice(0, -1),
                    {
                        role: 'bot',
                        content: botReply
                    }
                ]);
        }, 1000);
    };
    const generateAIResponse = (input)=>{
        const msg = input.toLowerCase().trim();
        if (msg.includes('fusion') && (msg.includes('what') || msg.includes('score') || msg.includes('meaning'))) {
            return 'FusionScore is a unified credit metric derived from multiple credit bureaus like Experian, Equifax, and TransUnion. It ranges from 300 to 850, with 720+ being excellent.';
        }
        if (msg.includes('how') && msg.includes('apply') && msg.includes('loan')) {
            return 'To apply for a loan, ensure your FusionScore is above 650, maintain a steady income, and gather documents like ID proof, income statements, and bank history.';
        }
        if (msg.includes('credit') && msg.includes('points')) {
            return 'Credit points reflect different components of your score — like payment history, credit utilization, and age of credit. They all add up to form your FusionScore.';
        }
        if (msg.includes('i am 18') || msg.includes('just 18') || msg.includes('no credit') && msg.includes('how')) {
            return 'Since you’re 18 and just starting out, you can build credit by applying for a secured credit card, getting a student credit card, or becoming an authorized user on someone else’s card.';
        }
        if (msg.includes('no') && msg.includes('credit score')) {
            return 'No worries! You can start building credit by using a secured credit card or credit-builder loan. Always pay on time and monitor your usage to grow your score.';
        }
        if (msg.includes('improve') || msg.includes('boost') || msg.includes('increase')) {
            return 'To improve your score, pay bills on time, reduce credit utilization below 30%, and avoid opening too many new accounts quickly. A good history builds trust.';
        }
        if (msg.includes('which bureaus') || msg.includes('data source') || msg.includes('credit bureau')) {
            return 'We use data from Equifax, Experian, and TransUnion — the top three credit bureaus — to build a unified, balanced score called FusionScore.';
        }
        if (msg.includes('eligibility') && msg.includes('loan')) {
            return 'Loan eligibility depends on your FusionScore, income, debt-to-income ratio, and recent payment history. A score above 650 improves your chances.';
        }
        if (msg.includes('faq') || msg.includes('help') || msg.includes('what can i ask')) {
            return 'You can ask me things like:\n- What is FusionScore?\n- How can I build credit at 18?\n- How do I apply for a loan?\n- What affects my credit score?\n- How to improve my score?';
        }
        // Default fallback
        return 'I’m still learning to answer that. Try asking about FusionScore, credit-building tips, loan application steps, or how to improve your credit score.';
    };
    const suggestions = [
        '💡 What is my FusionScore?',
        '💡 How do I apply for a loan?',
        '💡 How can I improve my credit score?',
        '💡 What credit bureaus are used?',
        '💡 Am I eligible for a personal loan?'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ChatBot$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].chatContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ChatBot$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].chatBox,
                children: chat.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: [
                                    msg.role === 'user' ? 'You' : 'AI',
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatBot.jsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this),
                            " ",
                            msg.content
                        ]
                    }, index, true, {
                        fileName: "[project]/components/ChatBot.jsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ChatBot.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ChatBot$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].inputRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ChatBot$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].chatInput,
                        type: "text",
                        placeholder: "Ask about your FusionScore, loan eligibility, etc.",
                        value: message,
                        onChange: (e)=>setMessage(e.target.value),
                        onKeyDown: (e)=>e.key === 'Enter' && handleSend()
                    }, void 0, false, {
                        fileName: "[project]/components/ChatBot.jsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ChatBot$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sendButton,
                        onClick: handleSend,
                        children: "Send"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatBot.jsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatBot.jsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                        children: "Try asking:"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatBot.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        children: suggestions.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                children: s
                            }, i, false, {
                                fileName: "[project]/components/ChatBot.jsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ChatBot.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatBot.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatBot.jsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ChatBot;
}}),
"[project]/pages/index.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$head$2e$js__$5b$external$5d$__$28$next$2f$head$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/head.js [external] (next/head.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatBot$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatBot.jsx [ssr] (ecmascript)");
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$head$2e$js__$5b$external$5d$__$28$next$2f$head$2e$js$2c$__cjs$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                    children: "Unified Credit AI ChatBot"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatBot$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__53766f01._.js.map