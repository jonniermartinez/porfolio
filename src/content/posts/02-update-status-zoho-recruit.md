---
title: "How to update the record's status via API in Zoho recruit with Delug Script? 📝"
publishedAt: 2024-03-22
description: "In this post you can learn how to update the record's status via API in Zoho recruit with Delug Script"
slug: "zoho-recruit-update-record-status"
isPublish: true
---

To update a record in Zoho Recruit, we need to target specific endpoints. Using the PUT method in the endpoint https://recruit.zoho.com/recruit/v2/{module_api_name} is effective only if the record is not blocked. However, if you intend to change the status of a blocked record, you must utilize the following endpoint: https://recruit.zoho.com/recruit/v2/Candidates/status. This endpoint is exclusively available for modules such as candidate, job opening, and offer.

This is the [officcial documentantion](https://www.zoho.com/recruit/developer-guide/apiv2/change-status.html) to how to do this operation and the scope that you need to do this oparation.

Let's delve into the code:

```java
JobOpeningId = "731279000000808258";
CandadidateId = "731279000000791031";
inputData = "{\"data\": [{\"ids\":[" + CandadidateId + "],\"jobids\":[" + JobOpeningId + "],   \"Candidate_Status\":\"No preseleccionado\",\"comments\":\"test\"}]}";

```

```java
response = invokeurl
[
	url :"https://recruit.zoho.com/recruit/v2/Candidates/status"
	type :PUT
	parameters:inputData
	connection:"recruit"
];
info response;
```

Feel free to explore and adapt this code for your specific use case. For further details, please refer to the Zoho Recruit API documentation.

Happy coding! 🚀
