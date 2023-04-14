# Social Media Analysis

## User

- id
- name
- username
- dateOfBirth
- password
- email
- createdAt
- updatedAt
- isActive

## Admin

- id
- createdAt
- updatedAt

## Permission

- id
- adminId
- doctype
- action (create, read, update, delete)

## Post

- id
- caption
- content
- owner
- createdAt
- updatedAt
- viewType (private, public, only_me)

## Attachment

- id
- size
- mimetype
- content
- originalName
- path
- post

## Comment

- id
- content
- post
- owner
- createdAt
- updatedAt

## CommentReply

- id
- content
- comment
- owner
- createdAt
- updatedAt

## Chat

- id
- name
- description
- createdAt
- updatedAt
- creator
- admin

## UserChat

- id
- chat_id
- user_id
- joinedAt
