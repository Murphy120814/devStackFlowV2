import { SidebarLink } from "@/types";
export const DESCRIPTION: string = `Welcome to Dev Stack Flow, the premier online community and question-and-answer platform for developers. Leveraging the latest web technologies, Dev Stack Flow provides an intuitive, user-friendly environment where programming enthusiasts, from beginners to seasoned professionals, can find answers, share knowledge, and collaborate on all things coding.

Our platform is designed to foster a supportive community where members can ask questions, exchange insights, and build their professional network. With a comprehensive categorization system, finding solutions to specific programming dilemmas has never been easier. Whether you're debugging code, exploring new technologies, or seeking career advice, Dev Stack Flow is your one-stop destination for all your development needs.

Key Features Include:

Extensive Q&A Repository: Access a wealth of information on a wide array of programming topics, contributed by a diverse and knowledgeable community.
Dynamic Tagging System: Quickly find the content most relevant to your interests or contribute to niche topics within the programming landscape.
User Engagement and Recognition: Earn badges, points, and a reputation as you contribute to the community, helping others solve problems while showcasing your expertise.
Real-Time Collaboration: Engage in discussions, provide real-time feedback, and collaborate with peers to tackle coding challenges together.
Dev Stack Flow is committed to building a rich, inclusive platform where every developer can grow their skills, share their expertise, and advance their career. Join our rapidly growing community today and start connecting with developers worldwide`;

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-questions",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
