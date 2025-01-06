# Repro for issue 8102

## Versions

firebase-tools: v13.22.0<br>
node: v18.20.4<br>
platform: macOS Sonoma 14.6.1

## Steps to reproduce


1. Setup a new project
2. Add a onRequest function and a onTaskDispacted task, and set region to something else than us-central1 (I've reproduced the issue on europe-west1
3. Run firebase emulators:start --project demo-non-us-destination-test-project
4. Trigger the onRequest funtion by opening the browser, or curl to http://127.0.0.1:5001/demo-non-us-destination-test-project/europe-west1/testOnRequest

Find more details in:
https://github.com/firebase/firebase-tools/issues/8102