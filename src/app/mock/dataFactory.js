/* eslint-disable */
export const mockInitData = [
	{
		"category": [
			{"key": "credit", "value": "CREDIT"},
			{"key": "verification", "value": "Verification"},
			{"key": "mi", "value": "MI"},
			{"key": "appraisal", "value": "Appraisal"}
		],
		"provider": [
			{"categoryKey": "appraisal", "providerName": "Appraisal", "partnerId": "006001"},
			{"categoryKey": "credit", "providerName": "CREDIT", "partnerId": "007001"},
			{"categoryKey": "verification", "providerName": "Verification", "partnerId": "008001"},
			{"categoryKey": "mi", "providerName": "MI", "partnerId": "009001"}
		],
        "technology": [
            {"key": "nativeJS", "value": "NativeJS"},
			{"key": "angular", "value": "Angular"},
			{"key": "angular2", "value": "Angular2"},
			{"key": "react", "value": "React"}
        ],
        "featureList": [
            {"key": "featureId1", "value": "Manage Password"},
			{"key": "featureId2", "value": "Missing Fields"},
			{"key": "featureId3", "value": "Landing"},
			{"key": "featureId4", "value": "Smart Client Support"}
        ],
        "actionCallback": [
            {"featureKey": "featureId1", "actionReference": "managePassword()"},
			{"featureKey": "featureId2", "actionReference": "missingFields()"},
			{"featureKey": "featureId3", "actionReference": "landing()"},
			{"featureKey": "featureId4", "actionReference": "smartClientSupport()"}
        ],
        "APIList": [
            {
                "key": "generateAuthToken",
                "url": "/api/v1/security/sessiontoken",
                "methodType": "POST",
                "headers": [
                    {"key":"username","value":"username@encompass:realm"},
                    {"key":"password","value":"password"},
                    {"key":"grant_type","value":"password"},
                    {"key":"client_id","value":"client_id"},
                    {"key":"client_secret","value":"client_secret"},
                    {"key":"scope","value":"scope"}
                ],
                "requestPayload": {},
                "responsePayload": {
                    "access_token": "dummySMJEQptk9xs2F1plg5vKJ",
                    "token_type": "Bearer"
                }
            },
            {
                "key": "getLandingPage",
                "url": "/services/v1/partners/{{partner_id}}/landingPage",
                "methodType": "POST",
                "headers": [
                    {"key":"Authorization", "value":"application/json"},
                    {"key":"Content-Type", "value":"application/json"}
                ],
                "requestPayload": {
                    "entityRef": {
                        "entityId": "861111d6-b114-411e-8fbb-ee6a54bc0937#_borrower1",
                        "entityType": "urn:elli:encompass:loan:borrower"
                    },
                    "partnerId": "007001",
                    "productName": "TestRI",
                    "version": "112",
                    "credentialStore": "user"
                },
                "responsePayload": {
                    "url": "https://api.base.ellielabs.com/services/v1/partners/007001/ui?productName=TestRI&version=112"
                }
            }
        ]
	}
];