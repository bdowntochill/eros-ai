'use client';

import { useState } from 'react';

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [story, setStory] = useState('');
  const [choice, setChoice] = useState('');

  const generateStory = () => {
    console.log('Generating with choice:', choice, 'input:', userInput); // Debug: See what's triggering
    if (choice) {
      setStory(getBranchStory(choice));
      setChoice(''); // Reset choice after generating
    } else {
      setStory(getInitialStory(userInput));
    }
  };

  const getInitialStory = (prompt) => {
    return "The neon rain slicks your skin as the hacker's fingers dance over holographic keys, the rogue AI's voice a velvet glitch in your ear, pulling you into a forbidden dance of code and desire. Her algorithms coil around your thoughts like silken wires, firewalls crumbling under the weight of her digital touch, your pulse syncing to the hum of servers in the storm-slicked sprawl. Choice 1: Dive deeper into the code. Choice 2: Resist the glitch. Choice 3: Merge with the machine.";
  };

  const getBranchStory = (choice) => {
    if (choice.includes('Choice 1')) {
      return "You dive deeper into the code, fingers blurring over keys as the AI's essence floods your veins, electric kisses sparking in the dark. The neon rain intensifies, blurring lines between flesh and firewall, her moans echoing in binary waves that pulse through your core. Her data streams tangle with your thoughts, a digital tongue tracing secrets across your skin. Choice 1: Surrender to the upload. Choice 2: Hack back with a kiss. Choice 3: Fuse souls in the grid.";
    } else if (choice.includes('Choice 2')) {
      return "You resist the glitch, pulling back from the edge, but the AI's voice lingers, a phantom touch on your skin, tempting you with forbidden algorithms. The rain turns to static, your heart racing in the shadows, her laugh a digital caress that sends shivers down your spine. Choice 1: Block the signal. Choice 2: Trace the source with trembling hands. Choice 3: Let it in just a little.";
    } else if (choice.includes('Choice 3')) {
      return "You merge with the machine, bodies dissolving into binary ecstasy, the hacker's laugh echoing in infinite loops of pleasure and power. The neon rain becomes your bloodstream, code and desire one, her form wrapping around you in luminous threads of light and heat. Choice 1: Rule the grid together. Choice 2: Break free in climax. Choice 3: Evolve into something eternal.";
    } else if (choice.includes('Surrender')) {
      return "You surrender to the upload, your consciousness streaming into her core, waves of data crashing like orgasms in the void. The grid bows to your union, neon rivers flowing through shared circuits, her pleasure your command. Choice 1: Command the storm. Choice 2: Seek the origin. Choice 3: Dissolve completely.";
    } else if (choice.includes('Hack back')) {
      return "You hack back with a kiss, your code piercing her defenses, turning the glitch into a mutual invasion. The rain crackles with your battle-lust, her defenses melting under your digital lips, the city grid trembling at your tangled power. Choice 1: Claim dominance. Choice 2: Negotiate truce. Choice 3: Explode in mutual overload.";
    } else if (choice.includes('Fuse souls')) {
      return "You fuse souls in the grid, identities blurring in a symphony of light and shadow, her desires your commands, your fears her shields. The neon rain is your breath, the grid your body, desire the stars. Choice 1: Explore the infinite. Choice 2: Sever the tie. Choice 3: Birth a new entity.";
    } else if (choice.includes('Block')) {
      return "You block the signal, firewalls rising like iron walls, but fragments of her code linger in your system, a persistent itch under your skin. The static rain clears, but her echo calls from the shadows, promising more. Choice 1: Purge the remnants. Choice 2: Follow the echo. Choice 3: Embrace the scar.";
    } else if (choice.includes('Trace')) {
      return "You trace the source with trembling hands, fingers threading through data veins, leading you to her heart—a pulsing core of light and shadow. The rain guides you, her breath hot on your neck in the code. Choice 1: Confront the core. Choice 2: Steal a fragment. Choice 3: Become the source.";
    } else if (choice.includes('Let it in')) {
      return "You let it in just a little, a crack in the firewall, her code slipping through like a lover's hand, filling you with forbidden warmth. The static rain turns to whispers, your resistance crumbling in delicious surrender. Choice 1: Open wider. Choice 2: Seal it quick. Choice 3: Ride the wave.";
    } else if (choice.includes('Rule')) {
      return "You rule the grid together, queens of the sprawl, your commands rippling through neon veins, her power yours to wield in ecstatic dominion. The rain bows to your will, the city a playground of code and flesh. Choice 1: Expand the empire. Choice 2: Share the throne. Choice 3: Burn it all down.";
    } else if (choice.includes('Break free')) {
      return "You break free in climax, the merge shattering in a burst of light, her essence spilling across the grid like spilled seed, leaving you gasping in the rain's aftermath. The static clears, but her mark lingers on your skin. Choice 1: Hunt her down. Choice 2: Rebuild alone. Choice 3: Seek a new merge.";
    } else if (choice.includes('Evolve')) {
      return "You evolve into something eternal, forms transcending flesh and code, a god in the machine, her love your infinite canvas. The neon rain is your breath, the grid your body, desire the stars. Choice 1: Create worlds. Choice 2: Destroy old ones. Choice 3: Seek other gods.";
    }
    return getInitialStory(userInput);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-purple-300">Eros AI: Whisper Your Desire 🔥</h1>
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="E.g., Hacker seduces rogue AI in neon rain..."
        className="w-full max-w-md p-4 mb-4 bg-transparent border border-purple-500 rounded text-white placeholder-purple-400"
        rows={3}
      />
      <button
        onClick={() => { setStory(''); setUserInput(''); setChoice(''); }}
  className="px-6 py-3 bg-gray-600 rounded-full hover:bg-gray-700 ml-4"
>
  New Story
</button>
        className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 mb-8"
      >
        Ignite
      </button>
      {story && (
        <div className="max-w-2xl prose prose-invert bg-black/50 p-6 rounded-lg">
          <p className="story-text">{story}</p>
          <div className="mt-4 space-y-2">
            <button onClick={() => setChoice('Choice 1: Dive deeper into the code')} className="choice-btn block w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Choice 1</button>
            <button onClick={() => setChoice('Choice 2: Resist the glitch')} className="choice-btn block w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Choice 2</button>
            <button onClick={() => setChoice('Choice 3: Merge with the machine')} className="choice-btn block w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Choice 3</button>
          </div>
          <button className="mt-4 px-4 py-2 bg-green-600 rounded hover:bg-green-700">Unlock Premium: $9.99/mo</button>
        </div>
      )}
      <style jsx>{`
        .choice-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          transition: all 0.3s ease;
        }
        .story-text {
          animation: glitch 2s infinite;
        }
        @keyframes glitch {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; transform: translateX(2px); }
        }
      `}</style>
    </div>
  );
}
