import { Subject } from "../types";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Programming",
    department: "Computer Science",
    description:
      "Covers core programming concepts, problem-solving, and basic algorithms.",
    createdAt: "2026-03-18T09:00:00.000Z",
  },
  {
    id: 2,
    code: "MATH214",
    name: "Linear Algebra",
    department: "Mathematics",
    description:
      "Introduces vectors, matrices, linear transformations, and practical applications.",
    createdAt: "2026-03-18T09:00:00.000Z",
  },
  {
    id: 3,
    code: "BUS305",
    name: "Principles of Marketing",
    department: "Business Administration",
    description:
      "Explains market research, consumer behavior, branding, and strategy basics.",
    createdAt: "2026-03-18T09:00:00.000Z",
  },
];
