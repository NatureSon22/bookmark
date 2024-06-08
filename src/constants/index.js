import {
  logoFirefox,
  logoGoogle,
  logoOpera,
  tab1,
  tab2,
  tab3,
} from "./imports";

export const features = [
  {
    id: crypto.randomUUID(),
    label: "Bookmark in one click",
    info: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img: tab1,
  },
  {
    id: crypto.randomUUID(),
    label: "Intelligent search",
    info: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img: tab2,
  },
  {
    id: crypto.randomUUID(),
    label: "Share your bookmarks",
    info: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    img: tab3,
  },
];

export const extensions = [
  {
    id: crypto.randomUUID(),
    name: "Chrome",
    img: logoGoogle,
    minimumVersion: 62,
  },
  {
    id: crypto.randomUUID(),
    name: "Firefox",
    img: logoFirefox,
    minimumVersion: 55,
  },
  {
    id: crypto.randomUUID(),
    name: "Chrome",
    img: logoOpera,
    minimumVersion: 46,
  },
];

export const faqs = [
  {
    id: crypto.randomUUID(),
    question: "What is Bookmark?",
    answer:
      "Bookmark is a tool to organize and manage your favorite web pages. It helps you save, categorize, and quickly access important websites. With Bookmark, you can sync your bookmarks across devices, making your web experience seamless and efficient.",
  },
  {
    id: crypto.randomUUID(),
    question: "How can I request a new browser?",
    answer:
      "To request a new browser, go to our support page and fill out the request form. Provide details about the browser you need and any specific features you're looking for. Our team will review your request and get back to you with further information. We value user feedback and strive to support a wide range of browsers.",
  },
  {
    id: crypto.randomUUID(),
    question: "How do I reset my password?",
    answer:
      "If you need to reset your password, click on the 'Forgot Password' link on the login page. Enter your registered email address, and we will send you instructions to reset your password. Follow the steps in the email to create a new password and regain access to your account.",
  },
  {
    id: crypto.randomUUID(),
    question: "What about other Chromium browsers?",
    answer:
      "Other Chromium browsers, like Edge and Opera, are fully supported by Bookmark. You can install our extension and use all the features without any issues. We are committed to providing a consistent experience across all major browsers, ensuring you can manage your bookmarks easily, no matter which browser you prefer.",
  },
];
