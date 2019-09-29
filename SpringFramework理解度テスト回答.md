# Spring Framework理解度テスト

以下のページの問題回答。
[12.5. Spring Framework理科度チェックテスト](http://terasolunaorg.github.io/guideline/5.5.1.RELEASE/ja/Appendix/SpringComprehensionCheck.html)
*TERASOLUNA Serve Framework for Java(5.x)Development Guideline 5.5.1RELEASE documentation 12.Appendix(Know How)*

穴埋め問題の問題文・図などは上記ページを参照ください。
ちなみに、答えは上記ページに乗っていなかったためあっているかは微妙です…

<参考書籍>Spring3入門 Javaフレームワーク・より良い設計とアーキテクチャ

---

##### １.Beanの依存関係が以下の図のようになるように(1)〜(4)を埋めてください。
(1)@Autowired
(2)YyyService
(4)ZzzRepository

---

##### ２.@Controllerと@Serviceと@Repositoryはそれぞれどういう場合に使用するか説明してください。
いずれも、@Componetnsの拡張である。
また、bean定義ファイル中のcomponent-scanタブにて、自動でDIコンテナに登録するために使用する。
- @Controller
  …プレゼンテーション層SpringMVC用アノテーション。SrpringMVCにおいては、
    Controller interfaceのimplementsと同等の意味
 
- @Service
  …ビジネスロジック層Service用アノテーション。
    →これをつけておくことにより、bean定義ファイルの<componetns-scanタグによって自動でDIコンテナに登録される。

- @Repository
    DAOをDIコンテナに登録するときに使用する。
    例外をすべてDataAccessExceptionに変換する。

---

##### ３.@Resourceと@Injectの違いを説明してください。
それぞれのアノテーションのみの場合、動きは変わらないが、
@Qualifierを使用した場合の挙動が違う。
- @Injectの場合…指定したフィールド名と同じコンポーネントをインジェクションする
- @Resourceの場合…フィールド名と同じコンポーネントをインジェクションする。(@Qualifierの指定が無視される形）
@Resourceでインジェクションするコンポーネントを指定したい場合は、nameを使う。

<参考>[@Autowired、@Inject、@Resourceの違いについての検証](https://qiita.com/KevinFQ/items/20a6d53a5f93e28ab9ef)

---

##### ４.Scopeがsingletonの場合とprototypeの場合の違いを説明してください。
前提知識：Scopeとは、@Components（やその拡張）に続けて指定するアノテーション。
- @Scope(/"singleton/"】の場合…コンポーネントはsingletonになる。
- @Scope(/"prototype/"】の場合…コンポーネントは利用されるたびにインスタンス化される。→都度newするのと変わらない？
ちなみに、@Scopeを省略した場合@Components指定されたクラスはsingletonになる。

---

##### ５.Scopeに関する次の説明で(1)～(3)を埋めてください。ただし(1)、(2)には”singleton”または”prototype”のどちらが入り、同じ値は入りません。またimport文は省略してください。
(1) singleton
(2) prototype
(3)@Scope("prototype")

---

##### ６.次のBean定義を行った場合、どのようなBeanがDIコンテナに登録されますか。
xxx.yyy.zzzパッケージのFooクラスを、について、fooというオブジェクト名（フィールド名）で宣言したbeanがDIコンテナに登録される。
→同じパッケージの同じクラスでも、違うオブジェクト名で宣言されたものは登録されない。

---

##### ７.com.example.domainパッケージ以下がcomponent scanの対象となるように以下のBean定義の(1)～(3)を埋めてください。
(1) component-scan
(2) base-package
(3) com.example.domain

---

##### ８.プロパティファイルに関する次の説明で(1)～(2)を埋めてください。import文は省略してください。
(1) classpath:*.properties
(2) ConfigrationProperties

---

##### ９.Springが提供するAOPのAdviceについての次の説明で(1)～(5)を埋めてください。尚、(1)～(5)には全て別の内容が入ります。
(1) Before
(2) After
(3) Around
(4) AfterReturning
(5) AfterThrowing

---

##### １０.@Transactionalアノテーションによるトランザクション管理を行うために以下のBean定義の(/*)を埋めてください。

答え:annotation-driven

---
