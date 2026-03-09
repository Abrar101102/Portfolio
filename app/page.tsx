'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Cpu, 
  Code2, 
  Layers, 
  GraduationCap, 
  Briefcase, 
  ChevronRight, 
  Github, 
  Linkedin, 
  Mail,
  ExternalLink,
  Box,
  Workflow
} from 'lucide-react';

// --- Components ---

const TerminalHeader = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-terminal-dark border-b border-terminal-green/20 font-mono text-xs text-terminal-green/60">
      <div className="flex items-center gap-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
        </div>
        <span className="hidden sm:inline">abrar@portfolio: ~</span>
      </div>
      <div className="flex items-center gap-4">
        <span>{time.toLocaleTimeString()}</span>
        <span className="hidden sm:inline">UTF-8</span>
      </div>
    </div>
  );
};

const SectionTitle = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-terminal-green/10 border border-terminal-green/30 rounded-lg">
      <Icon className="w-5 h-5 text-terminal-green" />
    </div>
    <h2 className="text-2xl font-mono font-bold tracking-tight text-terminal-green uppercase">
      {title}
    </h2>
    <div className="flex-1 h-[1px] bg-terminal-green/20" />
  </div>
);

const SkillBadge = ({ name }: { name: string }) => (
  <span className="px-3 py-1 bg-terminal-green/5 border border-terminal-green/20 rounded-full text-xs font-mono text-terminal-green/80 hover:bg-terminal-green/10 hover:border-terminal-green/40 transition-colors cursor-default">
    {name}
  </span>
);

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-terminal-dark font-sans selection:bg-terminal-green selection:text-black">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#00ff00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-5xl mx-auto px-4 py-8 relative">
        {/* Terminal Window Wrapper */}
        <div className="terminal-border rounded-xl overflow-hidden bg-terminal-dark/80 backdrop-blur-sm terminal-glow">
          <TerminalHeader />
          
          <div className="p-6 md:p-12">
            {/* Hero Section */}
            <header className="mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-3 py-1 mb-4 bg-terminal-green/10 border border-terminal-green/30 rounded text-[10px] font-mono text-terminal-green uppercase tracking-widest">
                  System Status: Active
                </div>
                <h1 className="text-5xl md:text-7xl font-mono font-extrabold mb-4 tracking-tighter">
                  ABRAR <span className="text-terminal-green terminal-text-glow">AHEMMAD</span>
                </h1>
                <p className="text-xl md:text-2xl text-terminal-green/60 font-mono mb-8 max-w-2xl leading-relaxed">
                  &gt; Full Stack Developer specializing in AI-driven workflows and modern web architectures.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center gap-2 px-6 py-3 bg-terminal-green text-black font-mono font-bold rounded hover:bg-white transition-colors">
                    <Mail className="w-4 h-4" /> CONTACT_ME
                  </a>
                  <div className="flex items-center gap-4 px-4">
                    <a href="https://github.com" className="text-terminal-green/60 hover:text-terminal-green transition-colors"><Github className="w-6 h-6" /></a>
                    <a href="https://linkedin.com" className="text-terminal-green/60 hover:text-terminal-green transition-colors"><Linkedin className="w-6 h-6" /></a>
                  </div>
                </div>
              </motion.div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column: Experience & Education */}
              <div className="lg:col-span-2 space-y-16">
                
                {/* Experience Section */}
                <section>
                  <SectionTitle title="Experience" icon={Briefcase} />
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-terminal-green/20 space-y-12"
                  >
                    <div className="relative">
                      <div className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-terminal-green border-4 border-terminal-dark" />
                      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-xl font-mono font-bold text-white">Full Stack Developer</h3>
                        <span className="text-xs font-mono text-terminal-green/60 bg-terminal-green/5 px-2 py-1 rounded border border-terminal-green/10">
                          Current • 1 Year
                        </span>
                      </div>
                      <p className="text-terminal-green font-mono text-sm mb-4">Tech Solutions Corp</p>
                      <ul className="space-y-3 text-terminal-green/70 text-sm leading-relaxed">
                        <li className="flex gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-terminal-green" />
                          <span>Architected and maintained complex frontend applications using <strong>Angular</strong>, ensuring high performance and responsive design.</span>
                        </li>
                        <li className="flex gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-terminal-green" />
                          <span>Developed robust backend services with <strong>FastAPI</strong>, implementing efficient data processing and API integrations.</span>
                        </li>
                        <li className="flex gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-terminal-green" />
                          <span>Leveraged <strong>Langflow</strong> to build and orchestrate advanced AI flows, integrating LLM capabilities directly into the product ecosystem.</span>
                        </li>
                        <li className="flex gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-terminal-green" />
                          <span>Engineered <strong>custom Langflow components</strong> to extend platform functionality, tailoring AI behaviors to specific business needs.</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </section>

                {/* Education Section */}
                <section>
                  <SectionTitle title="Education" icon={GraduationCap} />
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-terminal-green/20"
                  >
                    <div className="relative">
                      <div className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-terminal-green/40 border-4 border-terminal-dark" />
                      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-xl font-mono font-bold text-white">B.Tech in Computer Science</h3>
                        <span className="text-xs font-mono text-terminal-green/60">4 Years</span>
                      </div>
                      <p className="text-terminal-green/60 font-mono text-sm">University of Technology</p>
                    </div>
                  </motion.div>
                </section>

                {/* Featured Flow / Project Visualization */}
                <section>
                  <SectionTitle title="AI Workflow Architecture" icon={Workflow} />
                  <div className="p-6 rounded-xl border border-terminal-green/20 bg-terminal-green/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                      <Box className="w-24 h-24 text-terminal-green" />
                    </div>
                    <h4 className="text-lg font-mono font-bold text-terminal-green mb-2">Custom Langflow Integration</h4>
                    <p className="text-sm text-terminal-green/70 mb-6 max-w-md">
                      Visualizing the integration of custom components within the Langflow ecosystem to power automated decision-making.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded bg-terminal-green/20 flex items-center justify-center border border-terminal-green/40">
                        <Layers className="w-6 h-6 text-terminal-green" />
                      </div>
                      <div className="h-[1px] w-12 bg-terminal-green/40" />
                      <div className="w-12 h-12 rounded bg-terminal-green/20 flex items-center justify-center border border-terminal-green/40">
                        <Cpu className="w-6 h-6 text-terminal-green" />
                      </div>
                      <div className="h-[1px] w-12 bg-terminal-green/40" />
                      <div className="w-12 h-12 rounded bg-terminal-green/20 flex items-center justify-center border border-terminal-green/40">
                        <Terminal className="w-6 h-6 text-terminal-green" />
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Skills & Tech Stack */}
              <div className="space-y-12">
                <section>
                  <SectionTitle title="Core_Stack" icon={Code2} />
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs font-mono text-terminal-green/40 uppercase mb-4 tracking-widest">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        <SkillBadge name="Angular" />
                        <SkillBadge name="TypeScript" />
                        <SkillBadge name="Tailwind CSS" />
                        <SkillBadge name="RxJS" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-terminal-green/40 uppercase mb-4 tracking-widest">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        <SkillBadge name="FastAPI" />
                        <SkillBadge name="Python" />
                        <SkillBadge name="PostgreSQL" />
                        <SkillBadge name="Redis" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-terminal-green/40 uppercase mb-4 tracking-widest">AI & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        <SkillBadge name="Langflow" />
                        <SkillBadge name="LangChain" />
                        <SkillBadge name="OpenAI API" />
                        <SkillBadge name="Docker" />
                      </div>
                    </div>
                  </div>
                </section>

                {/* System Stats Card */}
                <div className="p-6 rounded-xl border border-terminal-green/20 bg-black/40 font-mono text-[10px] space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-terminal-green/40">UPTIME</span>
                    <span className="text-terminal-green">365 DAYS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-terminal-green/40">LOAD_AVG</span>
                    <span className="text-terminal-green">0.42 / 0.38 / 0.33</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-terminal-green/40">LOCATION</span>
                    <span className="text-terminal-green">REMOTE_NODE_01</span>
                  </div>
                  <div className="pt-4 border-t border-terminal-green/10">
                    <div className="flex justify-between mb-1">
                      <span className="text-terminal-green/40">PROJECT_COMPLETION</span>
                      <span className="text-terminal-green">98%</span>
                    </div>
                    <div className="w-full h-1 bg-terminal-green/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '98%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-terminal-green" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="px-6 py-8 border-t border-terminal-green/10 bg-black/20 text-center">
            <p className="font-mono text-[10px] text-terminal-green/40 uppercase tracking-widest">
              Built with Next.js & Tailwind • Designed by Abrar Ahemmad • © 2024
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
