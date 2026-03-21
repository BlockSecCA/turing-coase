# When Coase Met Turing

*An observation on economic morphogenesis*

**[Try the interactive simulation](https://blocksecca.github.io/turing-coase/)**

---

## The Observation

In 1937, Ronald Coase asked a question that economics had somehow never asked: *why do firms exist at all?* Why is the economy not one giant firm, or pure atomized exchange between individuals? His answer: there are two competing cost gradients. Coordination inside a firm gets cheaper per unit as you share context and routine. But organizational overhead — management, reporting, principal-agent friction — rises faster as the firm grows. The boundary of the firm is where these two gradients cross.

In 1952, Alan Turing asked an equivalent question in biology: *why do spots form on animal skin?* Why is the skin not uniformly one color? His answer: two chemicals interact. One reinforces itself locally (the activator). The other suppresses at a distance and diffuses faster (the inhibitor). When their diffusion rates differ enough, bounded patterns emerge spontaneously from a uniform substrate. No blueprint. No designer. Just two forces with different ranges.

These are the same answer.

I am not a mathematician or an economist. I am someone who thinks about organizations and noticed that Coase's boundary and Turing's boundary are drawn by the same mechanism. This essay is that observation, carried as far as intuition takes it.

## Two Forces, One Pattern

The mapping is direct.

**Coordination gain** is Turing's activator. When two activities are co-managed inside a firm, they share context, routines, tacit knowledge, and trust. This benefit reinforces locally — the more you coordinate, the more there is to coordinate. But it is inherently short-range. It depends on proximity, shared language, and working relationships that do not travel well.

**Organizational overhead** is Turing's inhibitor. Every additional activity inside a firm increases management burden. Meetings multiply. Reporting chains lengthen. Principal-agent friction compounds. And critically, this cost propagates faster and further than the coordination benefit. One new hire adds overhead for everyone in the reporting chain, not just the people they directly work with.

When the inhibitor diffuses faster than the activator, bounded patterns emerge. In biology, those patterns are spots on a cheetah, stripes on a zebra, or patches on a giraffe. In economics, those patterns are **firms**.

The boundary of the firm is not a decision someone makes. It is where coordination gain drops below the cost of organizational overhead — the edge of the Turing spot. The firm does not get designed. It crystallizes.

## The Skin

In Turing's model, patterns form on a substrate — a field of cells with specific material properties that determine how fast each chemical can spread. Change the substrate, change the pattern.

The economic substrate is **institutional infrastructure**: enforceable contracts, money, accounting standards, legal personhood, communication channels, shared norms. This is the "skin" on which economic patterns form.

And this skin has a developmental history:

- **Barter** is essentially no skin. Direct exchange, no mediating layer. No medium through which either coordination or overhead can propagate beyond the immediate transaction. No firms form.

- **Money** creates the first real skin. Value can flow. A surplus in one transaction can feed another. But it is thin — coordination travels a little further, but there is no infrastructure yet for overhead to propagate through. You get faint clustering: households, small workshops.

- **Contract law** thickens the skin. Agreements are enforceable across time and between strangers. Coordination range extends. But contracts simultaneously provide the first propagation channel for the inhibitor — obligations accumulate, disputes require adjudication, compliance requires monitoring. The Turing instability condition begins to be satisfied. Real firms nucleate.

- **Double-entry bookkeeping** is a phase change. Overhead suddenly has a high-fidelity, low-friction channel. You can track costs and performance across large organizational spans. The inhibitor's diffusion rate jumps. This is why the modern firm emerges when accounting technology matures — the skin acquired the material properties needed to support larger, sharper spots.

- **Corporate personhood** makes the spot self-sustaining. Before it, firms dissolved when their principal died. After it, the pattern persists independently of any individual. The skin remembers the spot.

Each institutional layer does not just enable new firms. It changes what kinds of patterns are possible at all.

## Technology Changes the Skin

Technology is not the skin. It modifies the skin's material properties.

The **printing press** raised both diffusion rates, but not equally. Codified knowledge — accounting methods, legal codes, management procedure — benefits most from mass reproduction. That is inhibitor infrastructure. Coordination gain, which depends on tacit knowledge and trust, benefited less. Print sharpened firm boundaries and enabled larger spots.

The **telegraph and railroad** extended coordination range without proportionally increasing overhead propagation. A manager in New York could coordinate with Chicago in real time, but the bureaucratic cost of managing that distance did not shrink. Result: bigger spots, same morphology. This is the era of the giant vertically integrated firm.

The **shipping container** did something similar in the physical dimension. Cheaper transport extended the activator's range. Firms stretched geographically. Multinational corporations became possible.

Every one of these technologies modified diffusion rates but **preserved locality**. Both forces still attenuated with distance. The governing equation stayed the same. Pattern scale changed. Pattern class did not. A cheetah with larger spots is still a cheetah.

## The Digital Rupture

Digital technology breaks locality itself.

An API call from São Paulo to Dublin costs the same as one from the next building. For any activity that can be digitally mediated, coordination gain no longer attenuates with distance. The activator goes non-local.

But overhead does not fully follow. Legal jurisdiction is still local. Labor regulation is still local. Management attention is still local — a human can only hold so many reporting relationships regardless of bandwidth. Cultural friction is still local. Time zones are still local.

This is not "better technology." It is a qualitatively different substrate. The activator is no longer governed by local diffusion. It reaches everywhere. The inhibitor is still partly local.

And this decoupling produces fundamentally different pattern classes:

**Plateaus with sharp boundaries.** Local Turing spots taper off smoothly. Non-local systems produce flat-topped territories with steep edges. Inside the platform: near-total dominance. Outside: near-zero presence. You are in the ecosystem or you are not. This is how platforms actually behave.

**Winner-take-all condensation.** When activation reaches everywhere, the longest-wavelength mode dominates. The pattern condenses into one or very few global-scale spots. Google in search. The substrate cannot support multiple spots at that scale.

**Spots with internal substructure.** In local Turing systems, spots are featureless blobs. In non-local systems, a large spot sustains its own internal pattern formation. Amazon is a spot that contains a marketplace, a ranking system, sub-ecosystems. Structure inside structure. Nested morphogenesis.

**Bimodal size distribution.** Many small spots coexisting with very few enormous ones. Platforms plus micro-firms, with mid-size firms hollowing out. This is not an anomaly to be corrected. It is the expected morphology when one diffusion rate escapes locality and the other does not.

The current economy is living on a skin that is part local and part non-local. Activities that can be digitally mediated live on non-local skin. Activities requiring physical presence still live on local skin. The boundary between those two zones is where the most interesting economic turbulence is happening right now.

## The Simulation

The [interactive simulation](https://blocksecca.github.io/turing-coase/) runs a Gray-Scott reaction-diffusion model — the same class of system Turing described — with economic labels on the parameters.

**Things to try:**

- **Start with "Artisan."** You see many small, well-separated spots — firms of similar size in a competitive market. Now slowly drag Coordination Range to the right. Watch the spots merge into larger structures. You are watching what the internet did to market structure.

- **Start with "Artisan" again.** This time, increase New Opportunity Rate. The clean spots connect into labyrinthine chains — guilds. You just rediscovered the guild system from first principles.

- **Start with "Industrial."** Push Organizational Decay toward "Fragile." Watch firms dissolve as institutional memory fails.

- **Start with "Platform."** Increase Overhead Reach toward "Pervasive." Large territories fragment as regulation bites.

- **Start with "Barter."** Increase New Opportunity Rate. Watch when firms first nucleate from the empty substrate. That is the Coasean instability threshold.

The parameter-space map on the right shows where you are and what regime transitions look like. The boundaries between pattern types are sharp — you do not smoothly interpolate between spots and stripes. You jump. This is why economic transitions are discontinuous.

## What This Is and What It Isn't

This is an observation of structural correspondence between two well-established formal systems. It is not a proof of isomorphism.

A full formalization would require constructing an explicit activity space with a well-defined metric, deriving reaction kinetics from economic first principles, and proving that the Coasean boundary falls out as the zero-level set of the activator in the patterned steady state. That is a research program, not an essay.

What the observation gives you without the formalization is a way of *seeing* economic morphology as pattern formation. It reframes questions about firms, markets, platforms, and regulation in terms that make the underlying dynamics visible:

- **Antitrust** maps to two distinct interventions with different morphological outcomes. Breaking up firms (increasing decay rate) produces many small fragile spots that may recondense. Behavioral regulation (increasing inhibitor diffusion) changes the equilibrium itself.

- **Business cycles** look like metastable-state transitions. A boom is not firms getting bigger — it is spots connecting into labyrinths. A bust is the labyrinth fragmenting.

- **Guilds** are a distinct pattern class (labyrinths), not primitive firms. They emerge when opportunity is high but coordination is local.

- **The mid-size firm hollowing out** is not a market failure. It is the expected morphology for a substrate with non-local activation and partly-local inhibition.

The math may follow. The insight does not need it.

## Prior Work

Nobody seems to have made exactly this mapping, but the pieces exist across several disconnected literatures:

**Krugman's New Economic Geography** (1991) frames spatial economic concentration as agglomeration forces vs. spreading forces — structurally a reaction-diffusion instability. But Krugman worked in a discrete two-region framework and never mapped it to Turing morphogenesis. His question is "where do spots form?" not "why do spots exist as a class?"

**Helbing (2009)** demonstrated that asymmetric diffusion drives social and economic systems into pattern-forming instability, framed in game-theoretic terms rather than firm boundaries.

**Volpert, Petrovskii et al.** built economic-demographic models using nonlocal reaction-diffusion PDEs, showing that nonlocal resource consumption produces periodic spatial patterns and that a single wealth accumulation center can emerge — exactly the winner-take-all prediction.

**A 2024 cross-diffusion paper** modeled labor-capital interaction, showed that uniform profit-optima become unstable under Turing conditions, and connected this to Krugman's geography models.

What none of these do is connect Turing morphogenesis to Coase's theory of the firm specifically — where the spot is the firm itself, the boundary is the make-or-buy margin, and the substrate parameter governs the pattern regime.

The economics literature has reaction-diffusion models for spatial agglomeration. It has Coasean theory for firm boundaries. Nobody seems to have formally connected the pattern-formation mathematics to the organizational boundary question.

---

*Carlos A. — March 2026*

*I'm not an economist or a mathematician. I'm a pattern noticer. One day, thinking about firms as features on an economic "skin," I realized that the simplest explanation for why a uniform substrate develops bounded structures is Turing's — and that Coase had already given the economic version of the same answer, thirty-five years earlier.*

## Running Locally

```bash
npm install
npm run dev
```

## License

Essay: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
Code: [MIT](LICENSE)
