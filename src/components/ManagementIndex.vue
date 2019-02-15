<template>
  <div>
    <h1>管理ページ</h1>
    <h2>メニュー関連</h2>
    <b-card-group deck>
      <b-card title="メニュー一覧" sub-title="Menus">

        <b-card-text>
          メニューの一覧を表示します
        </b-card-text>

        <b-link :to="{name: 'MenusIndex'}" class="card-link">メニュー一覧</b-link>
      </b-card>

      <b-card title="ジャンル別のメニュー一覧" sub-title="Genre filter menus">

        <b-card-text>
          登録されたジャンルごとにメニューをフィルタリングして表示します
        </b-card-text>

        <b-link :to="{name: 'Genres'}" class="card-link">ジャンル別メニュー一覧</b-link>
      </b-card>
    </b-card-group>
    <h2>追加</h2>
    <b-card-group deck>
      <b-card title="メニューを追加" sub-title="Add Menu">
        <b-card-text>
          ジャンルを選択しメニューを作成することができます
        </b-card-text>

        <b-link :to="{name: 'MenuNew'}" class="card-link">メニュー追加</b-link>
      </b-card>

      <b-card title="ジャンル追加" sub-title="Add Genre">
        <b-card-text>メニューが属するためのジャンルを作成することができます</b-card-text>
        <b-link :to="{name: 'GenreNew'}" class="card-link">ジャンル追加</b-link>
      </b-card>
    </b-card-group>
    <h2>ユーザー関連</h2>
    <b-card-group deck>
      <b-card title="ユーザー管理" sub-title="User Management">
        <b-card-text>
          Administratorや多のユーザーの管理を行うことができます
        </b-card-text>

        <b-link :to="{name: 'Users'}" class="card-link">ユーザー管理</b-link>
      </b-card>
    </b-card-group>
  </div>
</template>

<style>
h2 {
  margin-top: 1em;
}
</style>
