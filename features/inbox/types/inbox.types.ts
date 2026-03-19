// Shared types for Inbox feature

export type InboxMessage = {
  id: string;
  company: string;
  subject: string;
  status: string;
  tag: string;
  time: string;
  createdAt: string; 
};

export type ThreadMessage = {
  from: string;
  message: string;
  time: string;
};

export type AiContextData = {
  extracted: string;
  missing: string;
  quote: string;
  profile: string;
  reasoning: string;
};