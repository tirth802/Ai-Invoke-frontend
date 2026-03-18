

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

  //  account
  http.get("/api/account",()=>{
    return HttpResponse.json({
    name:" Vivek K",
    email:"vivek@gmail.com",
    signature:"Best regard,\nVivek"
      })
  }),

  http.put("/api/account",async({request})=>{
     
    const  body = await request.json()

    return HttpResponse.json({
      message:"Account updated",
      data:body
    })
  }),

  // Client Details
  http.get('/api/clients/:id',({params})=>{
    const {id}=params
    return  HttpResponse.json({
      id,
      name:id === "1"?'TechCorp NL':'VoltEdge Solutions',
      winRate:75.5,
      contactPerson: 'Jan de Vries' ,
       contactEmail:'j.devries@techcorp.nl',
       industry:'Not Mentioned',
      carriers: ['Emirates SkyCargo', 'Qatar Airways Cargo','Turkish Cargo'],
       communicationStyle:"Communicates in a clear and professional manner, prefers detailed breakdowns, typically responds within two Days, and is price-conscious while prioritizing reliability.",
      shippingPatterns:[{  route:'AMS->DMS',count:12},{  route:'HKG->LAX',count:20}],

         
    })
  })
];
