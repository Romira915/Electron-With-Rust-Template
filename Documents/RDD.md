---
title: Last Music Requirements Definition Document
subtitle: 要件定義書
author:
  - Romira915 <40430090+Romira915@users.noreply.github.com>
date: \today
subject: Last Music 要件定義書
abstract: プロジェクト「Last Music」の要件定義書
keywords: 
  - 要件定義書
  - RDD
  - Requirements Definition Document
fontsize: 10.5pt
listingTitle: "コード"
figPrefix: "図"
tblPrefix: "表"
eqnPrefix: "式"
lstPrefix: "コード"
header-includes:
  - \usepackage{longtable}
  - \usepackage{booktabs}
---

\renewcommand{\figurename}{図}
\renewcommand{\tablename}{表}

# 概要

　ミュージック管理ソフトウェアの開発．Media Goの代替を目指す．

## 用語定義

　用語[@tbl:word]．

| 用語       | 意味                                                   |
| :--------- | :----------------------------------------------------- |
| ライブラリ | ミュージックファイルのパス情報が格納されているデータ群 |
:用語 {#tbl:word}

# 機能要件

1. 任意のフォルダをライブラリに追加する機能．デフォルトで特殊フォルダのミュージック．
1. プレイリストを作成する機能．
1. Android(特にXperia)にプレイリストを転送する機能．
1. ライブラリからミュージックを検索する機能．(曲・アルバム・アーティスト・フォルダ)
1. CDDBからID3タグを取得する機能．
1. ミュージックファイルのID3タグを変更する機能．
1. フォルダ構成を`アーティスト -> アルバム -> ミュージック`に統一・整理する機能．

# 外部設計

[外部設計書_EDD.pdf](EDD.pdf)