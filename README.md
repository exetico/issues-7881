# Repro for issue 7881

## Versions

firebase-tools: v13.23.0<br>
node: v18.19.1<br>
platform: macOS Sonoma 14.7

## Steps to reproduce

1. Install dependencies
   - Run `cd functions`
   - Run `npm i`
   - Run `cd ../`
2. Run `firebase emulators:start --project demo-project`
3. Invoke `testOnRequest`
   - Run `curl http://127.0.0.1:5001/demo-project/us-central1/testOnRequest` on a new terminal or open "http://127.0.0.1:5001/demo-project/us-central1/testOnRequest" in a browser
4. Terminal running the emulators outputs

```shell
$ firebase emulators:start --project demo-project
i  emulators: Starting emulators: functions, firestore, database, tasks, extensions
i  emulators: Detected demo project ID "demo-project", emulated services will use a demo configuration and attempts to access non-emulated services for this project will fail.
i  firestore: Firestore Emulator logging to firestore-debug.log
✔  firestore: Firestore Emulator UI websocket is running on 9150.
i  database: Database Emulator logging to database-debug.log
i  ui: Emulator UI logging to ui-debug.log
i  functions: Watching "/Users/<PATH>/issues/7881/functions" for Cloud Functions...
✔  functions: Using node@18 from host.
Serving at port 8572

✔  functions: Loaded functions definitions from source: testOnRequest, testOnTaskDispatched.
✔  functions[us-central1-testOnRequest]: http function initialized (http://127.0.0.1:5001/demo-project/us-central1/testOnRequest).
✔  tasks: Created queue with key: queue:demo-project-us-central1-testOnTaskDispatched
✔  functions[us-central1-testOnTaskDispatched]: http function initialized (http://127.0.0.1:5001/demo-project/us-central1/testOnTaskDispatched).

┌─────────────────────────────────────────────────────────────┐
│ ✔  All emulators ready! It is now safe to connect your app. │
│ i  View Emulator UI at http://127.0.0.1:4000/               │
└─────────────────────────────────────────────────────────────┘

┌─────────────┬────────────────┬──────────────────────────────────┐
│ Emulator    │ Host:Port      │ View in Emulator UI              │
├─────────────┼────────────────┼──────────────────────────────────┤
│ Functions   │ 127.0.0.1:5001 │ http://127.0.0.1:4000/functions  │
├─────────────┼────────────────┼──────────────────────────────────┤
│ Firestore   │ 127.0.0.1:8089 │ http://127.0.0.1:4000/firestore  │
├─────────────┼────────────────┼──────────────────────────────────┤
│ Database    │ 127.0.0.1:9009 │ http://127.0.0.1:4000/database   │
├─────────────┼────────────────┼──────────────────────────────────┤
│ Cloud Tasks │ 127.0.0.1:9499 │ n/a                              │
├─────────────┼────────────────┼──────────────────────────────────┤
│ Extensions  │ 127.0.0.1:5001 │ http://127.0.0.1:4000/extensions │
└─────────────┴────────────────┴──────────────────────────────────┘
  Emulator Hub running at 127.0.0.1:4400
  Other reserved ports: 4500, 9150
┌─────────────────────────┬───────────────┬─────────────────────┐
│ Extension Instance Name │ Extension Ref │ View in Emulator UI │
└─────────────────────────┴───────────────┴─────────────────────┘
Issues? Report them at https://github.com/firebase/firebase-tools/issues and attach the *-debug.log files.

i  functions: Beginning execution of "us-central1-testOnRequest"
i  functions: Finished "us-central1-testOnRequest" in 1898.3835840000002ms
i  functions: Beginning execution of "us-central1-testOnTaskDispatched"
>  Hello logs from TASKS ON TASK DISPATCHED! { foo: { foo: 'bar' } }
i  functions: Finished "us-central1-testOnTaskDispatched" in 9.459291ms
```
