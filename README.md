# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false, add_index|
|password|string|null: false|
|email|string|null: false, unique|
### Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false, unique|
### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members

## membersテーブル（中間テーブル）
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string| |
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user