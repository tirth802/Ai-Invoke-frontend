

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
  }),
  // Inbox Handler
  http.get("/api/inbox", () => {
    return HttpResponse.json([
      {
        id: "1",
        company: "Global Trade Co.",
        subject: "Quote request - AMS>DXB - 450kg general cargo - urgent",
        status: "Quote",
        tag: "New",
        time: "6 min",
        createdAt: "2026-03-19T14:30:00Z",
      },
      {
        id: "2",
        company: "TechSupply Inc.",
        subject: "Booking confirmation - LAX>SIN - 1200kg electronics",
        status: "Booking",
        tag: "In Progress",
        time: "2h 15m",
        createdAt: "2026-03-19T16:30:00Z"
      },
       {
      id: "3",
      company: "FashionForward Ltd.",
      subject: "Status inquiry - JFK>LHR - shipment tracking AWB 123456789",
      status: "Status",
      tag: "Lost",
      time: "3h 30m",
      createdAt: "2026-03-18T10:00:00Z", 
    },

    ]);
  }),

  http.get("/api/inbox/:id", ({ params }) => {
    const id = params.id as string;

    if (id === "1") {
      return HttpResponse.json({
        thread: [
          {
            from: "Global Trade Co.",
            message: "Urgent Quote Request - Amsterdam to Dubai",
            time: "Jan 15, 2024 2:53 PM",
          },
          {
            from: "You",
            message:
              "Thank you for your inquiry. We will provide a competitive quote shortly.",
            time: "Jan 15, 2024 5:34 PM",
          },
        ],
        aiContext: {
          extracted: "Origin: AMS, Destination: DXB, Cargo: 450kg general cargo",
          missing: "Incoterms, Insurance preference",
          quote: "USD 1950 - Express Air Freight, 3-4 days transit",
          profile:
            "Global Trade Co. - frequent urgent shipments, prefers air freight.",
          reasoning: "High urgency, recommend prioritizing express air freight.",
        },
      });
    }

    return HttpResponse.json({ thread: [], aiContext: {} });
  }),
];