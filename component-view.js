const client = ZoomMtgEmbedded.createClient()

let meetingSDKElement = document.getElementById('meetingSDKElement')

// setup your Meeting SDK auth endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
var authEndpoint = ''
var sdkKey = ''
var meetingNumber = '123456789'
var passWord = ''
var role = 0
var userName = 'JavaScript'
var userEmail = ''
// pass in the registrant's token if your meeting or webinar requires registration. More info here:
// Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-meeting-with-registration-required
// Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-webinar-with-registration-required
var registrantToken = ''
var zakToken = ''

client.init({
  zoomAppRoot: meetingSDKElement,
  language: 'en-US',
})

function getSignature() {
  fetch(authEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      meetingNumber: meetingNumber,
      role: role
    })
  }).then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
    startMeeting(data.signature)
  }).catch((error) => {
  	console.log(error)
  })
}

function startMeeting(signature) {
  client.join({
    signature: signature,
    sdkKey: sdkKey,
    meetingNumber: meetingNumber,
    password: passWord,
    userName: userName,
    userEmail: userEmail,
    tk: registrantToken,
    zak: zakToken
  })
}
