React Challenge: Speaker Card
Overview
You've already seen how the Tech Conference 2026 dashboard works attendees can toggle their registration status and sessions can be registered or unregistered. Now it's your turn to extend the application by building one new component from scratch: a SpeakerCard.

Your Mission
Create src/components/SpeakerCard.jsx and integrate it into the existing app.

The Data
Add this array directly in App.jsx as a regular variable (no useState needed here):

const speakers = [
  {
    id: 1,
    name: "Ada Lovelace",
    topic: "The Future of Functional Programming",
    bio: "Pioneer of computer science and mathematical genius.",
    available: true
  },
  {
    id: 2,
    name: "Alan Turing",
    topic: "Machine Intelligence and the Limits of Computation",
    bio: "Father of theoretical computer science and artificial intelligence.",
    available: true
  },
  {
    id: 3,
    name: "Grace Hopper",
    topic: "Compilers: From Human Readable to Machine Code",
    bio: "Inventor of the first compiler and pioneer of programming languages.",
    available: false
  },
  {
    id: 4,
    name: "Linus Torvalds",
    topic: "Open Source and the Linux Kernel",
    bio: "Creator of the Linux kernel and the Git version control system.",
    available: true
  }
];
Requirements
SpeakerCard.jsx
This component receives a single speaker object as a prop and must render:

The speaker's name in a heading <h3>
Their talk topic with a 🎤 emoji prefix
Their bio in a <p> tag
An availability status label:
Show "✅ Available for Q&A" styled in green when available is true
Show "❌ Unavailable" styled in red when available is false
A toggle button:
When available → button says "Mark Unavailable" with a red background
When unavailable → button says "Mark Available" with a blue background
The available prop is only the initial value. Availability state must be managed inside SpeakerCard using useState initialized from the prop.

App.jsx
Declare the speakers array above the component function
Render all 4 speakers below <SessionList /> using .map()
Wrap them in a <section> with a heading that says "Speakers"
Pass each speaker object as a prop named speaker
Don't forget the key prop
Styling
Create src/styles/SpeakerCard.css and import it inside SpeakerCard.jsx. Your styles must follow the existing design system:

Card background: white
Border radius: 18px
Box shadow: 0 10px 25px rgba(0, 0, 0, 0.08)
Hover effect: translateY(-4px)
Available status color: #059669
Unavailable status color: #dc2626
Button width: 100%, padding: 12px, border radius: 10px
You must define two separate CSS classes for the button one for each state, and apply them conditionally, exactly like AttendeeCard does.

Rules
Do not modify any existing component
No inline styles, all styling goes in SpeakerCard.css
No external libraries, pure React and CSS only
The key prop must use the speaker's id, not the array index