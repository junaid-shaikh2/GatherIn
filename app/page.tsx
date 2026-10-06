'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Menu } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Request Posted',
    description: 'A neighbor or rescue shares exactly what support is needed, where, and when.',
  },
  {
    number: '02',
    title: 'Manual Human Review',
    description: 'Every request is reviewed by a real person. No AI. No automated decisions.',
  },
  {
    number: '03',
    title: 'Local Broadcast',
    description: 'Verified requests reach nearby volunteers who can respond with care.',
  },
]

export default function Page() {
  const [role, setRole] = useState<'volunteer' | 'seeker'>('volunteer')
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111] selection:bg-[#111] selection:text-[#f7f7f5]">
      <header className="border-b-2 border-[#111]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10 lg:px-16">
          <a href="#top" className="text-lg font-black tracking-tight" aria-label="GatherIn home">
            GatherIn
          </a>
          <nav className="hidden items-center gap-9 text-sm font-bold md:flex" aria-label="Main navigation">
            <a className="transition-opacity hover:opacity-60" href="#how-it-works">How it works</a>
            <a className="group inline-flex items-center gap-2 border-2 border-[#111] bg-[#111] px-4 py-2 text-[#f7f7f5] transition-colors hover:bg-transparent hover:text-[#111]" href="#early-access">
              Join Waitlist <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>
          <button
            type="button"
            className="border-2 border-[#111] p-2 md:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu aria-hidden="true" className="size-5" />
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="border-t-2 border-[#111] px-6 py-5 md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4 text-sm font-bold">
              <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
              <a href="#early-access" onClick={() => setMenuOpen(false)}>Join Waitlist</a>
            </div>
          </nav>
        )}
      </header>

      <div id="top" className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <section className="grid items-start gap-12 border-b-2 border-[#111] py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-20">
          <div>
            <p className="mb-8 text-xs font-black uppercase tracking-[0.16em]">A local welfare network</p>
            <h1 className="max-w-5xl text-[clamp(3.75rem,9vw,9.5rem)] font-black leading-[0.9] tracking-tight">
              Help should<br />
              feel <span className="underline decoration-[0.07em] underline-offset-[0.08em]">closer.</span>
            </h1>
          </div>
          <div className="max-w-md pb-1 lg:justify-self-end">
            <p className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              Direct support for disabled individuals, elderly neighbors, and the people rescuing animals in our streets.
            </p>
            <p className="mt-8 max-w-sm border-l-2 border-[#111] pl-4 text-base leading-relaxed text-[#555]">
              GatherIn connects real needs with real people nearby, with a human reviewing every request before it reaches the community.
            </p>
            <a className="mt-10 inline-flex items-center gap-3 border-b-2 border-[#111] pb-2 text-sm font-black uppercase tracking-[0.08em] transition-opacity hover:opacity-60" href="#early-access">
              Enter the early access queue <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </section>

        <section id="how-it-works" className="border-b-2 border-[#111] py-16 md:py-20" aria-labelledby="process-title">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.16em]">The safety process</p>
              <h2 id="process-title" className="max-w-xl text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">Useful by design.<br />Human by default.</h2>
            </div>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-[#555]">We keep the path short, transparent, and accountable.</p>
          </div>
          <div className="grid border-2 border-[#111] md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.number} className={`flex min-h-0 flex-col gap-8 p-6 md:p-8 ${index !== 0 ? 'border-t-2 border-[#111] md:border-l-2 md:border-t-0' : ''}`}>
                <div className="flex items-start justify-between">
                  <span className="text-sm font-black">{step.number}</span>
                  {index < steps.length - 1 && <span className="hidden text-xl md:block" aria-hidden="true">→</span>}
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-black tracking-tight">{step.title}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-[#555]">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="early-access" className="py-20 md:py-28" aria-labelledby="waitlist-title">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.16em]">Get involved</p>
              <h2 id="waitlist-title" className="max-w-lg text-5xl font-black leading-[0.92] tracking-tight md:text-7xl">Join the<br />Early Access<br />Queue.</h2>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-[#555]">Be among the first to help build a safer, more responsive local support network.</p>
            </div>

            <form onSubmit={handleSubmit} className="border-2 border-[#111] bg-white p-6 md:p-10">
              {submitted ? (
                <div className="flex min-h-72 flex-col justify-between">
                  <div className="flex size-12 items-center justify-center border-2 border-[#111] bg-[#111] text-white"><Check aria-hidden="true" className="size-6" /></div>
                  <div>
                    <h3 className="text-3xl font-black tracking-[-0.06em]">You&apos;re on the list.</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-[#555]">We&apos;ll be in touch as GatherIn opens in your area.</p>
                  </div>
                </div>
              ) : (
                <>
                  <fieldset>
                    <legend className="mb-5 text-sm font-black">I&apos;m joining as a</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className={`cursor-pointer border-2 p-4 transition-colors ${role === 'volunteer' ? 'border-[#111] bg-[#111] text-white' : 'border-[#bbb] hover:border-[#111]'}`}>
                        <input className="sr-only" type="radio" name="role" value="volunteer" checked={role === 'volunteer'} onChange={() => setRole('volunteer')} />
                        <span className="block text-base font-black">Volunteer</span>
                        <span className={`mt-1 block text-xs ${role === 'volunteer' ? 'text-[#ccc]' : 'text-[#666]'}`}>I can lend a hand nearby.</span>
                      </label>
                      <label className={`cursor-pointer border-2 p-4 transition-colors ${role === 'seeker' ? 'border-[#111] bg-[#111] text-white' : 'border-[#bbb] hover:border-[#111]'}`}>
                        <input className="sr-only" type="radio" name="role" value="seeker" checked={role === 'seeker'} onChange={() => setRole('seeker')} />
                        <span className="block text-base font-black">Seeker / Rescuer</span>
                        <span className={`mt-1 block text-xs ${role === 'seeker' ? 'text-[#ccc]' : 'text-[#666]'}`}>I need support or rescue help.</span>
                      </label>
                    </div>
                  </fieldset>
                  <div className="mt-10">
                    <label htmlFor="email" className="mb-3 block text-sm font-black">Email address</label>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <input id="email" name="email" type="email" required placeholder="you@example.com" autoComplete="email" className="min-h-14 flex-1 border-2 border-[#111] bg-transparent px-4 text-base outline-none placeholder:text-[#888] focus-visible:ring-4 focus-visible:ring-[#111]/20" />
                      <button type="submit" className="group inline-flex min-h-14 items-center justify-center gap-3 border-2 border-[#111] bg-[#111] px-6 text-sm font-black text-white transition-colors hover:bg-transparent hover:text-[#111]">Join queue <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
                    </div>
                    <p className="mt-4 text-xs text-[#666]">No spam. Just a note when early access is ready.</p>
                  </div>
                </>
              )}
            </form>
          </div>
        </section>

        <footer className="flex flex-col justify-between gap-4 border-t-2 border-[#111] py-6 text-xs font-bold uppercase tracking-[0.08em] sm:flex-row">
          <span>GatherIn / Local support, made human.</span>
          <span>Launching soon</span>
        </footer>
      </div>
    </main>
  )
}

    
