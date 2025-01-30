"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { IntegrationCard } from "@/components/integration-card"

const sections = [
  {
    title: "Introduction",
    content: `BARK AI Agent is a revolutionary platform that combines cutting-edge artificial intelligence with blockchain technology to transform the landscape of decentralized finance (DeFi) on the Solana ecosystem. This whitepaper outlines our vision, technology stack, and the transformative potential of BARK in various financial and social domains.

    BARK AI Agent serves as an intelligent copilot for Solana blockchain interactions, offering advanced trading strategies, real-time market analysis, and seamless DeFi protocol integrations. Our platform is designed to empower users with AI-driven insights and automated tools, making complex blockchain operations accessible and efficient.`,
  },
  {
    title: "Architecture",
    content: `The BARK AI Agent architecture is built on a robust and scalable foundation:

    1. Frontend: React-based dashboard with real-time updates and intuitive UI/UX, leveraging Next.js App Router for optimal performance.
    2. Backend: Solana-native programs written in Rust, ensuring high performance and security.
    3. AI Layer: Advanced machine learning models for predictive analytics and automated trading strategies, including integration with state-of-the-art language models.
    4. Blockchain Integration: Deep integration with Solana for fast, low-cost transactions and smart contract execution.
    5. Data Processing: Real-time data ingestion and processing pipeline for market analysis and decision-making.
    6. Security: Multi-layered security approach, including Privy for secure wallet management and authentication.`,
  },
  {
    title: "BARK AI Agent Core Features",
    content: `The BARK AI Agent is the core of our ecosystem, leveraging cutting-edge AI to:

    1. Analyze market trends and sentiment in real-time using advanced natural language processing.
    2. Execute optimized trading strategies across various DeFi protocols on Solana.
    3. Manage risk and portfolio allocation dynamically based on AI-driven insights.
    4. Provide personalized financial advice and insights to users through an interactive chat interface.
    5. Continuously learn and adapt to changing market conditions using reinforcement learning techniques.
    6. Offer automated trading bots with customizable strategies and risk parameters.
    7. Integrate with multiple Solana DeFi protocols for seamless liquidity and yield optimization.`,
  },
  {
    title: "AI Language Models and Integration",
    content: `BARK AI Agent leverages state-of-the-art AI language models to enhance its capabilities:

    1. OpenAI GPT-4: Utilized for advanced natural language processing, market sentiment analysis, and generating human-like responses in our chatbot interface.
    2. Anthropic Claude: Employed for complex data interpretation and ethical decision-making in financial contexts.
    3. DeepSeek: Integrated for specialized blockchain and DeFi-related tasks, offering deep insights into Solana ecosystem dynamics.
    4. Custom Models: Proprietary models trained on financial data for Solana-specific insights and predictions, continuously updated with on-chain data.

    Our AI orchestration system dynamically selects the most appropriate model for each task, ensuring optimal performance and accuracy across all BARK AI Agent functionalities.`,
  },
  {
    title: "Solana Ecosystem Integration",
    content: `BARK seamlessly integrates with key components of the Solana ecosystem:

    1. Jupiter: Integrated for efficient token swapping and liquidity aggregation, ensuring best execution prices for trades.
    2. Helius: Utilized for real-time blockchain data indexing and NFT metadata management, enabling fast and accurate market analysis.
    3. Metaplex: Incorporated for NFT creation, management, and marketplace functionalities, expanding BARK's capabilities into the NFT space.
    4. Dialect: Implemented for decentralized messaging and notifications, keeping users informed of market movements and AI agent actions.
    5. Pump.fun: Integrated for gamified trading experiences and community engagement, adding a fun and interactive element to DeFi.
    6. DexScreener: Utilized for comprehensive DEX analytics and trading pair insights, providing users with in-depth market data.
    7. Birdeye: Integrated for advanced on-chain analytics and real-time trading data across multiple Solana DEXes.`,
  },
  {
    title: "Integration Showcase",
    content: `Our integrations are at the core of BARK AI Agent's functionality, providing a comprehensive and powerful DeFi experience. The following visualization demonstrates how these integrations work together seamlessly:`,
    component: <IntegrationCard />,
  },
  {
    title: "Token Ecosystem",
    content: `BARK supports a diverse token ecosystem on Solana:

    1. SPL Tokens: Full support for Solana Program Library tokens, enabling a wide range of fungible tokens and seamless integration with the broader Solana DeFi ecosystem.
    2. Non-Fungible Tokens (NFTs): Integration with Metaplex for NFT creation, trading, and utility within the BARK ecosystem, including AI-driven NFT valuation and trading strategies.
    3. Semi-Fungible Tokens: Support for tokens that combine properties of both fungible and non-fungible tokens, enabling innovative financial products and gamified experiences.
    4. Custom Token Programs: Ability to interact with and support novel token standards developed on Solana, ensuring BARK stays at the forefront of token innovation.
    5. BARK Token: Native utility token of the BARK ecosystem, used for governance, fee discounts, and access to premium features.`,
  },
  {
    title: "DeFi Protocol Integration",
    content: `BARK seamlessly integrates with leading DeFi protocols on Solana, including:

    1. Decentralized Exchanges (DEXs): Automated market-making and liquidity provision across multiple Solana DEXes, with AI-optimized routing for best execution.
    2. Lending Platforms: Optimized borrowing and lending strategies, leveraging AI to maximize yields and minimize risks across various lending protocols.
    3. Yield Farming: Intelligent allocation for maximum returns, with AI-driven rebalancing based on market conditions and risk parameters.
    4. Derivatives: Risk management and hedging strategies using Solana-based derivative protocols, with AI-powered pricing models.
    5. Cross-chain Bridges: Facilitating interoperability with other blockchain ecosystems, enabling users to leverage opportunities across multiple chains.
    6. Automated Market Makers (AMMs): Deep integration with Solana-based AMMs for efficient liquidity provision and arbitrage opportunities.`,
  },
  {
    title: "BARK Ecosystem",
    content: `The BARK ecosystem encompasses a wide range of financial and social applications:

    1. AI Trading Agent: Automated trading strategies powered by machine learning, with customizable risk profiles and performance analytics.
    2. Analytics Dashboard: Comprehensive insights into portfolio performance, market trends, and AI agent activities, with real-time data visualization.
    3. Blinks: Short-term, AI-powered trading opportunities identified and executed automatically based on market inefficiencies.
    4. Social Finance: Collaborative investing and community-driven financial products, leveraging collective intelligence and AI insights.
    5. Governance Platform: Decentralized decision-making for the BARK protocol, with AI-assisted proposal analysis and voting recommendations.
    6. Educational Hub: AI-powered learning resources and interactive tutorials to help users understand DeFi concepts and BARK functionalities.
    7. Risk Management Suite: Advanced tools for portfolio risk assessment and management, powered by AI predictive models.`,
  },
  {
    title: "Crowdfunding and Disaster Relief",
    content: `BARK leverages blockchain and AI to revolutionize charitable giving:

    1. Transparent Donations: Trackable and verifiable charitable contributions on the Solana blockchain, ensuring donor trust and recipient accountability.
    2. AI-Driven Fund Allocation: Optimal distribution of resources based on need and impact, using machine learning models to analyze real-time data and predict resource requirements.
    3. Smart Contract Escrow: Ensures funds are released only when predefined conditions are met, with AI-powered verification of milestone completion.
    4. Real-time Impact Tracking: AI-powered analytics to measure and report on the effectiveness of relief efforts, providing donors with transparent impact metrics.
    5. Global Coordination: Facilitating rapid response to disasters through decentralized coordination, leveraging AI to optimize resource deployment and volunteer efforts.
    6. Predictive Modeling: AI-driven disaster prediction and preparedness planning, helping communities and relief organizations stay ahead of potential crises.`,
  },
  {
    title: "BARK Governance and Token",
    content: `The BARK token is central to our ecosystem's governance and utility:

    1. Governance: Token holders can propose and vote on protocol upgrades, parameter changes, and strategic decisions, with AI-assisted proposal analysis.
    2. Staking: Users can stake BARK tokens to earn rewards, secure the network, and gain voting power in governance decisions.
    3. Fee Discounts: BARK token holders receive discounts on platform fees, encouraging long-term engagement with the ecosystem.
    4. Access to Premium Features: Exclusive AI insights, advanced trading tools, and priority access to new features for token holders.
    5. Liquidity Mining: Incentivizing liquidity provision across integrated DeFi protocols, with AI-optimized reward distribution.
    6. Deflationary Mechanism: A portion of fees is used to buy back and burn BARK tokens, creating a deflationary pressure on the token supply.
    7. Community Treasury: A percentage of platform revenues is allocated to a community-controlled treasury for ecosystem development and grants.`,
  },
  {
    title: "Security and Compliance",
    content: `BARK prioritizes the security and regulatory compliance of its platform:

    1. Multi-layered Security: Implementing best practices in smart contract security, regular audits, and bug bounty programs.
    2. Privy Integration: Secure wallet management and authentication, enhancing user security without compromising convenience.
    3. AI-powered Fraud Detection: Advanced algorithms to identify and prevent fraudulent activities in real-time.
    4. Regulatory Compliance: Commitment to adhering to evolving regulatory frameworks in the DeFi space, with AI-assisted compliance monitoring.
    5. Privacy Protection: Implementing zero-knowledge proofs and other privacy-preserving technologies to protect user data.
    6. Insurance Fund: Establishment of an insurance fund to protect users against potential smart contract vulnerabilities or hacks.`,
  },
  {
    title: "Future Roadmap",
    content: `BARK AI Agent's vision for the future includes:

    1. Cross-chain Expansion: Extending AI agent capabilities to other blockchain ecosystems while maintaining Solana as the core focus.
    2. Advanced AI Models: Continuous development and integration of more sophisticated AI models for improved prediction accuracy and strategy optimization.
    3. Decentralized AI: Research into on-chain AI computation and decentralized machine learning models to enhance the trustlessness of the BARK ecosystem.
    4. Institutional Tools: Development of enterprise-grade tools and APIs for institutional adoption of BARK AI Agent capabilities.
    5. Mobile App: Launch of a mobile application for on-the-go access to BARK AI Agent features and portfolio management.
    6. AI-Driven Tokenomics: Implementation of dynamic tokenomics adjusted by AI based on ecosystem health and market conditions.
    7. Virtual and Augmented Reality Integration: Exploring immersive interfaces for data visualization and trading in the metaverse.`,
  },
  {
    title: "Conclusion",
    content: `BARK AI Agent represents a paradigm shift in the DeFi landscape, leveraging the power of artificial intelligence and the Solana blockchain to create a more efficient, accessible, and impactful financial ecosystem. By combining cutting-edge technology with a strong focus on user empowerment, security, and social responsibility, BARK is poised to lead the next wave of innovation in decentralized finance and beyond.

    As we continue to develop and expand the BARK ecosystem, we remain committed to our core principles of transparency, community governance, and continuous innovation. We invite developers, investors, and DeFi enthusiasts to join us in shaping the future of finance, where AI and blockchain technology converge to create unprecedented opportunities for growth, inclusion, and positive global impact.`,
  },
]

const stats = [
  { label: "Total Value Locked (TVL)", value: "$500M", color: "bg-blue-500" },
  { label: "Daily Active Users", value: "100,000", color: "bg-green-500" },
  { label: "AI Trades Executed", value: "5,000,000", color: "bg-purple-500" },
  { label: "Accuracy Rate", value: "97%", color: "bg-yellow-500" },
]

export function WhitepaperContent() {
  const [activeSection, setActiveSection] = useState<number | null>(null)
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats(stats.map((stat) => Number.parseFloat(stat.value.replace(/[^0-9.]/g, ""))))
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleDownloadPDF = () => {
    // In a real application, this would generate or fetch a PDF file
    console.log("Downloading PDF...")
    // Placeholder for PDF download logic
    alert("PDF download started. (This is a placeholder action)")
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">BARK AI Agent Whitepaper</h1>
      <div className="flex justify-center mb-8">
        <Button onClick={handleDownloadPDF} className="flex items-center gap-2">
          <Image src="/icons/download.svg" alt="Download icon" width={20} height={20} />
          Download Full Whitepaper (PDF)
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-card p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
            <div className="flex items-center">
              <Progress value={animatedStats[index]} className={`w-full ${stat.color}`} />
              <span className="ml-4 text-2xl font-bold">{stat.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="mb-6"
          >
            <button
              onClick={() => setActiveSection(activeSection === index ? null : index)}
              className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  activeSection === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {activeSection === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow"
                >
                  <p className="whitespace-pre-wrap">{section.content}</p>
                  {section.component && <div className="mt-4">{section.component}</div>}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">BARK AI Agent Architecture</h2>
        <Image
          src="/images/bark-ai-agent-architecture.png"
          alt="BARK AI Agent Architecture Diagram"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

