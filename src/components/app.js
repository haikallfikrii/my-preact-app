import { h } from "preact";
import { useState } from "preact/hooks";
import "./style.css";

// Shared Constants
const mutedButtonClasses = "p-2 rounded-full bg-gray-300 hover:bg-gray-400";
const messageItemClasses = "flex items-center mb-2";
const listHeaderClasses = "font-bold mb-2";
const primaryButtonClasses = "bg-blue-500 text-white py-2 px-4 rounded";
const secondaryButtonClasses = "bg-gray-500 text-white py-2 px-4 rounded";

// Individual Components
const Contact = ({ imgSrc, name, message, time, notification }) => (
  <div className={`${messageItemClasses} p-2 hover:bg-gray-100 rounded`}>
    <img src={imgSrc} alt={name} class="rounded-full w-10 h-10 mr-2" />
    <div class="flex-1">
      <p class="font-bold">{name}</p>
      <p class="text-gray-500 text-sm truncate">{message}</p>
    </div>
    <div class="text-right">
      <span class="block text-xs text-gray-400">{time}</span>
      {notification && (
        <span class="block text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ml-auto">
          {notification}
        </span>
      )}
    </div>
  </div>
);

const GroupItem = ({ letter, name, notification }) => (
  <li className={`${messageItemClasses} p-2 hover:bg-gray-100 rounded`}>
    <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
      {letter}
    </span>
    <span class="flex-1">{name}</span>
    {notification && (
      <span class="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ml-auto">
        {notification}
      </span>
    )}
  </li>
);

const Message = ({ senderName, time, content, imgSrc, link }) => (
  <div class="mb-4">
    <p class="text-gray-500 text-sm">
      {senderName} <span class="text-xs">{time}</span>
    </p>
    <div className={`bg-${content.bg} text-${content.fg} p-2 rounded`}>
      <p>{content.text}</p>
      {imgSrc && <img src={imgSrc} alt="Content" class="rounded mt-2" />}
      {link && (
        <a
          href={link}
          class="text-blue-500 mt-2 block"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
      )}
    </div>
  </div>
);

const App = () => {
  const [messageInput, setMessageInput] = useState("");

  return (
    <div class="flex h-screen bg-gray-200">
      <div class="w-1/4 bg-white p-4 shadow-lg">
        <h2 class="text-xl font-bold mb-4">Chat</h2>
        <div class="relative mb-4">
          <input
            type="text"
            placeholder="Search Contact"
            class="w-full p-2 rounded bg-gray-100 border border-gray-300"
          />
        </div>
        <div class="mb-4">
          <Contact
            imgSrc="https://placehold.co/40x40"
            name="Jonathan"
            message="Lorem Ipsum is simply text..."
            time="10:00AM"
            notification="1"
          />
          <Contact
            imgSrc="https://placehold.co/40x40"
            name="Elizabeth Jan"
            message="It is a long established fact"
            time="10:40AM"
          />
          <Contact
            imgSrc="https://placehold.co/40x40"
            name="Kevin"
            message="Contrary to popular belief, lor..."
            time="01:00PM"
            notification="2"
          />
          <Contact
            imgSrc="https://placehold.co/40x40"
            name="Michael Sean"
            message="Great!!"
            time="01:46PM"
          />
        </div>
        <div class="flex justify-between mb-4">
          <button class={primaryButtonClasses}>Meeting</button>
          <button class={secondaryButtonClasses}>Schedule</button>
        </div>
        <div>
          <h3 class={listHeaderClasses}>Groups (5)</h3>
          <ul>
            <GroupItem letter="A" name="App Development" notification="2" />
            <GroupItem letter="U" name="UI/UX Designs" />
            <GroupItem letter="I" name="iSpring ABC Team" />
            <GroupItem letter="M" name="Marketing" />
            <GroupItem
              letter="A"
              name="Accounts and Sales Team"
              notification="2"
            />
          </ul>
        </div>
      </div>

      <div class="w-2/4 bg-white p-4 flex flex-col shadow-lg">
        <div class="flex items-center mb-4">
          <img
            src="https://placehold.co/40x40"
            alt="Kevin"
            class="rounded-full w-10 h-10 mr-2"
          />
          <div>
            <p class="font-bold">Kevin</p>
            <p class="text-gray-500 text-sm">UI / UX Designer</p>
          </div>
          <div class="ml-auto flex items-center space-x-2">
            <button class={mutedButtonClasses}>
              <img
                aria-hidden="true"
                alt="search"
                src="https://openui.fly.dev/openui/24x24.svg?text=🔍"
              />
            </button>
            <button class={mutedButtonClasses}>
              <img
                aria-hidden="true"
                alt="call"
                src="https://openui.fly.dev/openui/24x24.svg?text=📞"
              />
            </button>
            <button class={mutedButtonClasses}>
              <img
                aria-hidden="true"
                alt="video"
                src="https://openui.fly.dev/openui/24x24.svg?text=📹"
              />
            </button>
            <button class={mutedButtonClasses}>
              <img
                aria-hidden="true"
                alt="more"
                src="https://openui.fly.dev/openui/24x24.svg?text=⋮"
              />
            </button>
          </div>
        </div>
        <div class="flex-1 overflow-y-auto">
          <Message
            senderName="Michael Sean"
            time="Yesterday 10:14 AM"
            content={{
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              bg: "gray-100",
              fg: "gray-800",
            }}
          />
          <Message
            senderName="Michael Sean"
            time="Yesterday 10:20 AM"
            content={{
              text: "It is a long established fact that a reader will be distracted by the readable",
              bg: "blue-500",
              fg: "white",
            }}
          />
          <Message
            senderName="Michael Sean"
            time="Yesterday 10:50 AM"
            content={{
              text: "I shared Website here. Check it and let me know",
              bg: "gray-100",
              fg: "gray-800",
            }}
            imgSrc="https://placehold.co/100x100"
            link="https://azhospitals.com/preventivehealth/"
          />
          <Message
            senderName="You"
            time="Today 02:14 PM"
            content={{
              text: "Awesome! Let me check.",
              bg: "green-500",
              fg: "white",
            }}
          />
        </div>
        <div class="mt-4 flex items-center">
          <input
            type="text"
            class="flex-1 p-2 rounded bg-gray-100 border border-gray-300 mr-2"
            placeholder="Type a message..."
            value={messageInput}
            onInput={(e) => setMessageInput(e.target.value)}
          />
          <button class={primaryButtonClasses}>Send</button>
        </div>
      </div>

      <div class="w-1/4 bg-white p-4 shadow-lg">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">Active Now</h2>
          <a href="#" class="text-blue-500">
            Add New Profile
          </a>
        </div>
        <Contact
          imgSrc="https://placehold.co/40x40"
          name="Alice"
          message="Online"
          time=""
        />
        <Contact
          imgSrc="https://placehold.co/40x40"
          name="Bob"
          message="Online"
          time=""
        />
        <Contact
          imgSrc="https://placehold.co/40x40"
          name="Charlie"
          message="Online"
          time=""
        />
        <div class="mt-8">
          <h3 class={listHeaderClasses}>User Information</h3>
          <p class="text-gray-700">Phone: +01-222-345678</p>
          <p class="text-gray-700">Email: Kevin_aztechnologies@gmail.com</p>
        </div>
        <div class="mt-8">
          <h3 class={listHeaderClasses}>Group Participants</h3>
          <p class="text-gray-700">Marketing</p>
        </div>
        <div class="mt-8">
          <h3 class={listHeaderClasses}>Media</h3>
          <div class="flex space-x-2">
            <img
              src="https://placehold.co/100x100"
              alt="Media 1"
              class="rounded"
            />
            <img
              src="https://placehold.co/100x100"
              alt="Media 2"
              class="rounded"
            />
            <img
              src="https://placehold.co/100x100"
              alt="Media 3"
              class="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
