# Potluck-Planner-BackEnd

https://potluck-planner-webpt16.herokuapp.com/

# Endpoints
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | /register | register a potluck |
| POST | /login | login to a potluck |
| POST | /guest | add a new guest to the potluck (RESTRICTED) |
| PUT | /guests/:id | edit guest info (RESTRICTED)|
| PUT | /potlucks/:id | edit potluck info (RESTRICTED)|
| DELETE | /guests/:id | deletes existing guest (RESTRICTED)|
| DELETE | /potlucks/:id | deletes existing potluck (RESTRICTED)|
| GET | /guests | get a list of all guests (RESTRICTED) |
| GET | /potlucks | get a list of all potlucks (RESTRICTED) |
| GET | /logout | logs out potluck (RESTRICTED) |

RESTRICTED = User must be logged in

# Table Requirements
# potlucks
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | potluck id (auto generated) |
| username | string | yes | yes | potluck username (max 50 char) |
| password | string | yes | no | potluck password (max 50 char) |
| date | string | yes | no | N/A |
| location | string | yes | no | N/A |

# guests
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | guest id (auto generated) |
| name | string | yes | yes | guest name (max 50 char) |
| email | string | no | no | N/A |
| item | string | yes | no | N/A |
