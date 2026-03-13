
import { http, HttpResponse } from "msw";
const workspaces = [
  {
    id: 1,
    name: "Workspace 01",
    members: ["email1@example.com"],
  },
  {
    id: 2,
    name: "Workspace 02",
    members: [],
  },
];

export const handlers = [
  http.get(`/api/user`, () => {
    return HttpResponse.json({
      id: 1,
      name: "Vivek",
      email: "Vivek05@gmail.com",
      avatarUrl:
        "https://thepicturesdp.in/wp-content/uploads/2025/07/beautiful-flower-for-whatsapp-dp.jpg",
    });
  }),
  // GET Workspaces
  http.get("/api/workspaces", () => {
    return HttpResponse.json(workspaces);
  }),
  // Create Workspace
  http.post("/api/workspaces", async ({ request }) => {
    const body = await request.json() as {  name :string ; members:string[]}

    const newWorkspace = {
      id: workspaces.length + 1,
      name: body.name,
      members: body.members,
    };
    workspaces.push(newWorkspace);

    return HttpResponse.json(newWorkspace);
  }),
];
