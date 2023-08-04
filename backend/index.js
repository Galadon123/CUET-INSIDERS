const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Simple node server running");
});

app.use(cors());
app.use(express.json());

// uKNZcXgsP18cyBxT //
//fazlulkarim362

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://fazlulkarim362:uKNZcXgsP18cyBxT@cluster0.t1ag31c.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const userCollection = client.db("server").collection("events");
    const userCollection2 = client.db("server").collection("Comments");
    const userCollection3 = client.db("server").collection("Posts");
    const userCollection4 = client.db("server").collection("Users");
    const userCollection5 = client.db("server").collection("Appointments");
    //CREATE
    app.post("/posts/comment", async (req, res) => {
      const user = req.body;
      const result = await userCollection2.insertOne(user);
      res.send(result);
    });
    app.post("/posts", async (req, res) => {
      const user = req.body;
      //console.log(user.postDate);
      const result = await userCollection3.insertOne(user);
      res.send(result);
    });
    app.post("/posts/count/:id", async (req, res) => {
      const postId = req.params.id;
      const like=req.body.likes;
      const filter = { _id: new ObjectId(postId) };
      const option = { upsert: true };
      const updateLike = {
        $set: {
          likes:like,
        },
      };
      const result = await userCollection3.updateOne(
        filter,
        updateLike,
        option
      );
      //console.log(result);
      res.send(result);
    });
    app.post("/users", async (req, res) => {
      const user = req.body;
      const em = user.email;
      const query = { email: em };
      const cursor = userCollection4.find(query);
      const alluser = await cursor.toArray();
      if (alluser.length == 0) {
        const result = await userCollection4.insertOne(user);
        res.send(result.insertedId);
      } else {
        res.send(alluser[0]._id);
      }
    });
    app.post("/appointment/:id", async (req, res) => {
      const mentorId = req.params.id;
      const userId = req.body.userId;
      const meetingTopic = req.body.meetingTopic;
      const approved = false;
      const status = false;
      const meetingdate = "";
      const meetingtime = "";
      const meetinglink = "";
      const appointment = {
        mentorId,
        userId,
        meetingTopic,
        meetingdate,
        meetingtime,
        meetinglink,
        approved,
        status,
      };
      const result = await userCollection5.insertOne(appointment);
      res.send(result);
    });
    app.post("/appointmenthandle/:id", async (req, res) => {
      const appointmentId = req.params.id;
      const filter = { _id: new ObjectId(appointmentId) };
      const { meetingdate, meetinglink, meetingtime, approved } = req.body;
      const option = { upsert: true };
      const updateAppointment = {
        $set: {
          approved: approved,
          meetingdate: meetingdate,
          meetinglink: meetinglink,
          meetingtime: meetingtime,
          status: true,
        },
      };
      const result = await userCollection5.updateOne(
        filter,
        updateAppointment,
        option
      );
      //console.log(result);
      res.send(result);
    });
    app.post("/users/:id", async (req, res) => {
      const userId = req.params.id;
      //console.log(userId);
      const mentorId = req.body.mentorId;
      const flag=req.body.status;
      //console.log(mentorId);
      const filter = { _id: new ObjectId(userId) };
      const cursor = userCollection4.find(filter);
      const users = await cursor.toArray();
      if(flag){
        const preMentor = users[0].mentors.find((ment) => {
          return ment.Id == mentorId;
        });
        if (preMentor === undefined) {
          const newMentor = [...users[0].mentors, mentorId];
          const option = { upsert: true };
          const updateUser = {
            $set: {
              mentors: newMentor,
            },
          };
          const result = await userCollection4.updateOne(
            filter,
            updateUser,
            option
          );
          res.send(result);
        }
      }
       else{
        //console.log("hit")
       // console.log(users[0])
        // console.log(mentorId);
          const newMentors=users[0].mentors.filter(m=>{
            return m!=mentorId;
          })
          const option = { upsert: true };
          const updateUser = {
            $set: {
              mentors: newMentors,
            },
          };
          const result = await userCollection4.updateOne(
            filter,
            updateUser,
            option
          );
          res.send(result);
       }
    });
    //Read
    app.get("/posts/comment/:id", async (req, res) => {
      const commentid = req.params.id;
      const query = { id: commentid };
      const cursor = userCollection2.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });
    app.get("/requested-appointments/:id", async (req, res) => {
      const userId = req.params.id;
      //console.log(userId);
      const query = { mentorId: userId };
      const cursor = userCollection5.find(query);
      const users = await cursor.toArray();
      //console.log(users);
      res.send(users);
    });
    app.get("/my-appointments/:id", async (req, res) => {
      const userId = req.params.id;
      const query = { userId: userId };
      const cursor = userCollection5.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    app.get("/posts", async (req, res) => {
      const query = {};
      const cursor = userCollection3.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });
    app.get("/posts/likes/:id", async (req, res) => {
      const postid=req.params.id;
      
      const query = {};
      const cursor = userCollection3.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });
    app.get("/events", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });
    app.get("/mentors/:id", async (req, res) => {
      const userId = req.params.id;
      const query2 = { _id: new ObjectId(userId) };
      const cursor2 = userCollection4.find(query2);
      const user = await cursor2.toArray();
      const isMentor = true;
      const query = { isMentor: isMentor };
      const cursor = userCollection4.find(query);
      var mentors = await cursor.toArray();
      user[0].mentors.map((mentorId) => {
        const temp = mentors.find((m) => {
          return m._id == mentorId;
        });
        if (temp._id == mentorId) {
          mentors = mentors.filter((men) => {
            return men._id != temp._id;
          });
        }
      });
      res.send(mentors);
    });
    app.get("/users/:id", async (req, res) => {
      const userId = req.params.id;
      const query = { _id: new ObjectId(userId) };
      const cursor = userCollection4.find(query);
      const user = await cursor.toArray();
      const userMentors=[...user[0].mentors]
      res.send(userMentors);
    });
    app.get("/users/mentor/:id", async (req, res) => {
      const userId = req.params.id;
      const query = { _id: new ObjectId(userId) };
      const cursor = userCollection4.find(query);
      const user = await cursor.toArray();
      //console.log(user[0]);
      res.send(user[0]);
    });
    app.get("/loadevent/:id", async (req, res) => {
      const id = req.params.id;
      const query = { eventId: id };
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });
    app.get("/dashboard/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const cursor = userCollection3.find(query);
      const users = await cursor.toArray();
      const userEmail = users[0].email;
      const query2 = { email: userEmail };
      const query3 = { email: userEmail };
      const cursor2 = userCollection3.find(query2);
      const cursor3 = userCollection4.find(query3);
      const user = await cursor3.toArray();
      const postuser = user[0];
      const posts = await cursor2.toArray();
      const postAndUser = { posts, postuser };
      res.send(postAndUser);
    });
    app.delete("/post/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection3.deleteOne(query);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Simple node server running on port ${port}`);
});
