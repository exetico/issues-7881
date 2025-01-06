const admin = require("firebase-admin");
const { onRequest } = require("firebase-functions/v2/https");
const { getFunctions } = require("firebase-admin/functions");
const { onTaskDispatched } = require("firebase-functions/v2/tasks");

admin.initializeApp();

const region_input = "europe-west1";

exports.testOnRequest = onRequest(	{
    region: region_input
},
async (request, response) => {

    // console.log("Process env", process.env);
    const taskPayload = {
        foo: "bar",
    };
    const targetUri = "testOnTaskDispatched";

    const queue = getFunctions().taskQueue(targetUri);

    // console.log("Queue", queue);

    try {
        await queue.enqueue(taskPayload);
    } catch (error) {
        console.error("Error scheduling task", error);
        response.status(500).send("Error scheduling task");
        return;
    }
    response.send("Hello from HTTP ON REQUEST!");
});

exports.testOnTaskDispatched = onTaskDispatched({
    region: region_input
}, (request) => {
    console.info("Hello logs from TASKS ON TASK DISPATCHED!", {
        foo: request.data,
    });

});
