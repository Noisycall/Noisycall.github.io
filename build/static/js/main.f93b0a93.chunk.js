(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    120: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        r = t.n(n),
        o = t(34),
        l = t.n(o);
      t(85),
        Boolean(
          "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
        );
      t(86);
      var m = t(16),
        u = t(17),
        i = t(20),
        s = t(18),
        c = t(19),
        p = t(75),
        h = t(24),
        S = t(41),
        d = t.n(S),
        G = t(35),
        f = t.n(G),
        E = t(23),
        v = t.n(E),
        k = t(10),
        y = t.n(k),
        g = t(14),
        A = t.n(g),
        b = t(50),
        w = t.n(b),
        j = t(72),
        N = t.n(j),
        x = t(42),
        P = t.n(x),
        R = t(51),
        C = t.n(R),
        O = t(65),
        B = t.n(O),
        I = t(66),
        M = t.n(I),
        H = t(67),
        D = t.n(H),
        T = t(68),
        J = t.n(T),
        K = t(69),
        W = t.n(K),
        L = t(70),
        z = t.n(L),
        V = t(71),
        Y = t.n(V),
        U = (function(e) {
          function a() {
            var e, t;
            Object(m.a)(this, a);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((t = Object(i.a)(
                this,
                (e = Object(s.a)(a)).call.apply(e, [this].concat(r))
              )).state = { lowervisible: "" }),
                (t.options = { root: null, threshold: 0 }),
                (t.handleEnter = function(e) {
                  t.setState(function() {
                    var a = {
                      lowervisible: e.isIntersecting ? "fado" : "invisible"
                    };
                    return console.log(e.isIntersecting), a;
                  });
                }),
                (t.images = [W.a, z.a, Y.a]),
                (t.Appimages = [B.a, M.a, D.a, J.a]),
                (t.dowloadlink =
                  " https://play.google.com/store/apps/details?id=in.edu.projecthermes.www.mitwpustudentconsole"),
                t
            );
          }

          return (
            Object(c.a)(a, e),
              Object(u.a)(a, [
                {
                  key: "render",
                  value: function() {
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        w.a,
                        { style: { textAlign: "center" } },
                        r.a.createElement(
                          "h1",
                          null,
                          "Welcome to Coder's Era, a place for programmers to learn and succeed"
                        ),
                        r.a.createElement("hr", null),
                        r.a.createElement(
                          A.a,
                          { href: "#Slots", variant: "outline-info", size: "lg" },
                          "Recruitment slots"
                        )
                      ),
                      r.a.createElement(
                        d.a,
                        { fluid: !0, className: "mb-5 mb-lg-3" },
                        r.a.createElement(
                          f.a,
                          { style: { fontSize: 20 } },
                          r.a.createElement(
                            v.a,
                            {
                              lg: { span: 4, offset: 2 },
                              className: "border-right"
                            },
                            r.a.createElement(
                              y.a,
                              { className: "h-100", bg: "dark", text: "white" },
                              r.a.createElement(
                                y.a.Header,
                                { style: { textAlign: "center" } },
                                "MIT Student Console"
                              ),
                              r.a.createElement(
                                y.a.Body,
                                {
                                  className:
                                    "d-flex flex-column justify-content-between text-center"
                                },
                                "The MIT Student console enables the students an easy to use platform to get organized and stay on top of all their college activities and studies",
                                r.a.createElement("hr", null),
                                r.a.createElement(
                                  C.a,
                                  null,
                                  this.Appimages.map(function(e, a) {
                                    return r.a.createElement(
                                      P.a,
                                      { key: a },
                                      r.a.createElement("img", {
                                        src: e,
                                        className: "img-fluid",
                                        alt: e
                                      })
                                    );
                                  })
                                ),
                                r.a.createElement("hr", null),
                                r.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "d-flex justify-content-center flex-wrap"
                                  },
                                  r.a.createElement(
                                    A.a,
                                    {
                                      variant: "success",
                                      href: this.dowloadlink,
                                      size: "lg"
                                    },
                                    "Download"
                                  )
                                )
                              )
                            )
                          ),
                          r.a.createElement(
                            v.a,
                            { lg: 4 },
                            r.a.createElement(
                              y.a,
                              {
                                className: "mt-4 mb-lg-0 mt-lg-0 h-100",
                                bg: "dark",
                                text: "white"
                              },
                              r.a.createElement(
                                y.a.Header,
                                { style: { textAlign: "center" } },
                                "MIT Student Console"
                              ),
                              r.a.createElement(
                                y.a.Body,
                                {
                                  className:
                                    "d-flex flex-column justify-content-between text-center"
                                },
                                "The MIT Student console PWA similar functionality to the App, but in a platform independent manner.",
                                r.a.createElement("hr", null),
                                r.a.createElement(
                                  C.a,
                                  null,
                                  this.images.map(function(e, a) {
                                    return r.a.createElement(
                                      P.a,
                                      { key: a },
                                      r.a.createElement("img", {
                                        src: e,
                                        className: "img-fluid",
                                        alt: e
                                      })
                                    );
                                  })
                                ),
                                r.a.createElement("hr", null),
                                r.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "d-flex justify-content-center flex-wrap"
                                  },
                                  r.a.createElement(
                                    A.a,
                                    {
                                      variant: "success",
                                      size: "lg",
                                      href:
                                        "http://mitconsolelite.codersera.tech/"
                                    },
                                    "Link"
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        w.a,
                        { id: "lower", className: this.state.lowervisible },
                        r.a.createElement(
                          "h2",
                          { className: "text-center" },
                          "About Us"
                        ),
                        r.a.createElement("br", null),
                        r.a.createElement(
                          N.a,
                          { style: { fontFamily: "Verdana", fontSize: "14" } },
                          r.a.createElement(
                            y.a,
                            null,
                            r.a.createElement(
                              y.a.Header,
                              null,
                              r.a.createElement("b", null, "Harsh (Founder)")
                            ),
                            r.a.createElement(
                              y.a.Body,
                              {
                                className:
                                  "d-flex flex-column justify-content-between text-center"
                              },
                              "The founder of the club and a very talented programmer, he has experience making Android Apps for the last 3 years. He has a talent for picking the best people to work with and will go sleepless in his quest to deliver as many features as possible to the users of his apps. You might be familiar with his work in the form of the MIT Student Console App Console.",
                              r.a.createElement(
                                A.a,
                                {
                                  className: "mt-md-1 mt-2",
                                  href: "mailto:harsh@codersera.tech",
                                  block: !0,
                                  variant: "primary"
                                },
                                "Email"
                              )
                            )
                          ),
                          r.a.createElement(
                            y.a,
                            null,
                            r.a.createElement(
                              y.a.Header,
                              null,
                              r.a.createElement("b", null, "Manas")
                            ),
                            r.a.createElement(
                              y.a.Body,
                              {
                                className:
                                  "d-flex flex-column justify-content-between text-center"
                              },
                              "A Programmer to his core, Manas has worked at more PHP code than I would even care to look at, but his importance in building reliable backends cannot be understated. He is also the primary developer of the MIT PWA as well as a Co-Developer on the MIT Student Console App.",
                              r.a.createElement(
                                A.a,
                                {
                                  className: "mt-md-0 mt-2",
                                  href: "mailto:manas@codersera.tech",
                                  block: !0,
                                  variant: "primary"
                                },
                                "Email"
                              )
                            )
                          ),
                          r.a.createElement(
                            y.a,
                            null,
                            r.a.createElement(
                              y.a.Header,
                              null,
                              r.a.createElement("b", null, "Kunal")
                            ),
                            r.a.createElement(
                              y.a.Body,
                              {
                                className:
                                  "d-flex flex-column justify-content-between text-center"
                              },
                              "Hello, I'm the one who created this website, so if you didn't like it I'm sorry to disappoint you \u2639\ufe0f. However, if you liked it, please let me know at the linked email \ud83d\ude03.",
                              r.a.createElement(
                                A.a,
                                {
                                  className: "mt-md-0 mt-2",
                                  href: "mailto:kunal@codersera.tech",
                                  block: !0,
                                  variant: "primary"
                                },
                                "Email"
                              )
                            )
                          )
                        )
                      )
                    );
                  }
                }
              ]),
              a
          );
        })(n.Component),
        F = t(52),
        q = t(74),
        Z = t.n(q),
        $ = t(73),
        Q = t.n($),
        X = t(25),
        _ = t.n(X),
        ee = t(43),
        ae = t.n(ee),
        te = (function(e) {
          function a() {
            var e, t;
            Object(m.a)(this, a);
            for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
              o[l] = arguments[l];
            return (
              ((t = Object(i.a)(
                this,
                (e = Object(s.a)(a)).call.apply(e, [this].concat(o))
              )).state = { searchval: "", testmap: void 0 }),
                (t.testmap = F.map(function(e, a) {
                  return r.a.createElement(
                    "tr",
                    null,
                    r.a.createElement("td", null, a + 1),
                    r.a.createElement("td", null, e.name),
                    r.a.createElement("td", null, e.Group)
                  );
                })),
                (t.handleInput = function() {
                  var e = document.getElementById("hello").value;
                  (t.state.searchval = e), console.log(t.state.searchval);
                  var a = F.filter(function(e) {
                    return (
                      e.name
                        .toLowerCase()
                        .indexOf(t.state.searchval.toLowerCase()) >= 0
                    );
                  }).map(function(e, a) {
                    return r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("td", null, a + 1),
                      r.a.createElement("td", null, e.name),
                      r.a.createElement("td", null, e.Group)
                    );
                  });
                  t.setState({ testmap: a });
                }),
                t
            );
          }

          return (
            Object(c.a)(a, e),
              Object(u.a)(a, [
                {
                  key: "componentDidMount",
                  value: function() {
                    this.handleInput();
                  }
                },
                {
                  key: "render",
                  value: function() {
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        d.a,
                        { className: "mt-1" },
                        r.a.createElement(
                          f.a,
                          { className: "m-3" },
                          r.a.createElement(
                            v.a,
                            null,
                            r.a.createElement(
                              Q.a,
                              {
                                style: { textAlign: "center", fontWeight: "bold" }
                              },
                              r.a.createElement(
                                _.a,
                                { variant: "warning" },
                                "If you have registered and do not see your name, please contact us here",
                                r.a.createElement(
                                  A.a,
                                  {
                                    type: "button",
                                    size: "sm",
                                    variant: "warning",
                                    className: "mx-2",
                                    href: "mailto:recruitment@codersera.tech"
                                  },
                                  "Contact"
                                )
                              ),
                              r.a.createElement(
                                _.a,
                                { variant: "danger" },
                                "If you have missed your slots so far, Friday will be the last day for first round of interviews"
                              ),
                              r.a.createElement(
                                _.a,
                                { variant: "info" },
                                "Location is N204"
                              ),
                              r.a.createElement(
                                _.a,
                                { variant: "primary" },
                                "Slot 7 - 3:45 - 4:30 PM IST - 2/8/19"
                              ),
                              r.a.createElement(
                                _.a,
                                { variant: "secondary" },
                                "Slot 8 - 4:30 - 5:15 PM IST - 2/8/19"
                              ),
                              r.a.createElement(
                                _.a,
                                { variant: "dark" },
                                "Slot 9 - 5:15 - 6:00 PM IST - 2/8/19"
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          f.a,
                          null,
                          r.a.createElement(
                            v.a,
                            null,
                            r.a.createElement(
                              ae.a,
                              null,
                              r.a.createElement(
                                ae.a.Group,
                                { controlId: "formName" },
                                r.a.createElement(ae.a.Control, {
                                  id: "hello",
                                  as: "input",
                                  placeholder: "Enter Your Name",
                                  onChange: this.handleInput
                                })
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          f.a,
                          null,
                          r.a.createElement(
                            v.a,
                            null,
                            r.a.createElement(
                              Z.a,
                              {
                                bordered: !0,
                                variant: "dark",
                                striped: !0,
                                responsive: !0
                              },
                              r.a.createElement(
                                "thead",
                                null,
                                r.a.createElement(
                                  "tr",
                                  null,
                                  r.a.createElement("th", null, "#"),
                                  r.a.createElement("th", null, "Name"),
                                  r.a.createElement("th", null, "Slot")
                                )
                              ),
                              r.a.createElement("tbody", null, this.state.testmap)
                            )
                          )
                        )
                      )
                    );
                  }
                }
              ]),
              a
          );
        })(n.Component),
        ne = (function(e) {
          function a() {
            return (
              Object(m.a)(this, a),
                Object(i.a)(this, Object(s.a)(a).apply(this, arguments))
            );
          }

          return (
            Object(c.a)(a, e),
              Object(u.a)(a, [
                {
                  key: "render",
                  value: function() {
                    return r.a.createElement(
                      p.a,
                      null,
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(
                          h.d,
                          null,
                          r.a.createElement(h.b, {
                            path: "/",
                            component: U,
                            exact: !0
                          }),
                          r.a.createElement(h.b, {
                            path: "/Slots",
                            component: te
                          }),
                          r.a.createElement(h.a, { to: "/", push: !0 })
                        )
                      )
                    );
                  }
                }
              ]),
              a
          );
        })(n.Component),
        re = t(125),
        oe = t(123),
        le = t(124),
        me = t(54),
        ue = t.n(me),
        ie = t(78),
        se = t.n(ie),
        ce = (function(e) {
          function a() {
            var e, t;
            Object(m.a)(this, a);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((t = Object(i.a)(
                this,
                (e = Object(s.a)(a)).call.apply(e, [this].concat(r))
              )).state = { vertTrue: !1 }),
                (t.resizeEvent = function() {
                  "large" !== ue.a.getCurrentBreakpoint() &&
                  "xLarge" !== ue.a.getCurrentBreakpoint()
                    ? t.setState({ vertTrue: !0 })
                    : t.setState({ vertTrue: !1 });
                }),
                t
            );
          }

          return (
            Object(c.a)(a, e),
              Object(u.a)(a, [
                {
                  key: "render",
                  value: function() {
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        re.a,
                        { variant: "dark", bg: "dark", expand: "lg" },
                        r.a.createElement(
                          re.a.Brand,
                          { href: "/home", style: { width: "200px" } },
                          r.a.createElement(oe.a, {
                            src: se.a,
                            rounded: !0,
                            height: "10%",
                            width: "15%"
                          }),
                          r.a.createElement(
                            "span",
                            { style: { color: "#00ff00" }, className: "m-1" },
                            "Coders' Era"
                          )
                        ),
                        r.a.createElement(re.a.Toggle, {
                          "aria-controls": "basic-navbar-nav",
                          className: "ml-auto",
                          onClick: this.resizeEvent
                        }),
                        r.a.createElement(
                          re.a.Collapse,
                          { id: "basic-navbar-nav" },
                          r.a.createElement(
                            le.a,
                            { className: "ml-auto text-right", id: "test" },
                            r.a.createElement(le.a.Link, { href: "#/" }, "Home"),
                            r.a.createElement(
                              le.a.Link,
                              { href: "#Slots" },
                              "Recruitment Slots"
                            )
                          )
                        )
                      )
                    );
                  }
                }
              ]),
              a
          );
        })(n.Component),
        pe = t(79),
        he = t.n(pe),
        Se = (function(e) {
          function a() {
            var e, t;
            Object(m.a)(this, a);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((t = Object(i.a)(
                this,
                (e = Object(s.a)(a)).call.apply(e, [this].concat(r))
              )).handleScroll = function() {
                window.scroll(0, 0);
              }),
                t
            );
          }

          return (
            Object(c.a)(a, e),
              Object(u.a)(a, [
                {
                  key: "render",
                  value: function() {
                    return r.a.createElement(
                      "div",
                      { className: "mt-3" },
                      r.a.createElement(
                        he.a,
                        { bg: "dark", variant: "dark", expand: "lg" },
                        r.a.createElement(
                          A.a,
                          {
                            variant: "secondary",
                            href: "mailto:recruitment@codersera.tech"
                          },
                          "Contact Us"
                        ),
                        r.a.createElement(
                          A.a,
                          {
                            variant: "secondary",
                            className: "ml-auto",
                            onClick: this.handleScroll
                          },
                          "Scroll to Top"
                        )
                      )
                    );
                  }
                }
              ]),
              a
          );
        })(n.Component);
      l.a.render(
        r.a.createElement(ce, null),
        document.getElementById("header1")
      ),
        l.a.render(
          r.a.createElement(ne, null),
          document.getElementById("root")
        ),
        l.a.render(
          r.a.createElement(Se, null),
          document.getElementById("footer1")
        ),
      "serviceWorker" in navigator &&
      navigator.serviceWorker.ready.then(function(e) {
        e.unregister();
      });
    },
    52: function(e) {
      e.exports = [
        { name: "Abhijeet jha", Group: "Slot 1" },
        { name: "Dewen Honawale", Group: "Slot 1" },
        { name: "Pratham Jaiswal", Group: "Slot 1" },
        { name: "Priyanka jawalkar", Group: "Slot 1" },
        { name: "Rutvik Bhalerao ", Group: "Slot 1" },
        { name: "Saarthak Batra ", Group: "Slot 1" },
        { name: "Sajal", Group: "Slot 1" },
        { name: "Shambhavi Sinha", Group: "Slot 1" },
        { name: "Soham Gumaste", Group: "Slot 1" },
        { name: "Atharva Pansare", Group: "Slot 2" },
        { name: "Devangi Agarwal", Group: "Slot 2" },
        { name: "Devansh Pandya", Group: "Slot 2" },
        { name: "Dhanashree Sandesh Godase ", Group: "Slot 2" },
        { name: "Gargie Nimbalkar ", Group: "Slot 2" },
        { name: "Ishaan bhatnagar ", Group: "Slot 2" },
        { name: "Kanishk Jamgaonkar", Group: "Slot 2" },
        { name: "Krishna Wankhede", Group: "Slot 2" },
        { name: "Manan Ahuja", Group: "Slot 2" },
        { name: "Naigam Jain", Group: "Slot 2" },
        { name: "Nitin Thakur", Group: "Slot 2" },
        { name: "Parakh Khandelwal", Group: "Slot 2" },
        { name: "Priyanka bagade", Group: "Slot 2" },
        { name: "Reuben George", Group: "Slot 2" },
        { name: "Rohit Shelar", Group: "Slot 2" },
        { name: "Sanket Jadhao", Group: "Slot 2" },
        { name: "Saurav Suresh", Group: "Slot 2" },
        { name: "Siddharth Shenoy ", Group: "Slot 2" },
        { name: "Srijan Gupta", Group: "Slot 2" },
        { name: "Srishti Bose", Group: "Slot 2" },
        { name: "Sumanth Benhur", Group: "Slot 2" },
        { name: "Tanishq Borse", Group: "Slot 2" },
        { name: "Vighnesh", Group: "Slot 2" },
        { name: "Vipul Dunde is", Group: "Slot 2" },
        { name: "Vivek Ramakrishnan", Group: "Slot 2" },
        { name: "YASHPAL KHANDELWAL ", Group: "Slot 2" },
        { name: "Aryan Yadav", Group: "Slot 3" },
        { name: "Aditya bhadakwade", Group: "Slot 3" },
        { name: "Mukta Khot ", Group: "Slot 3" },
        { name: "Ajinkya Nagarkar", Group: "Slot 3" },
        { name: "Omkar Avinash Shete", Group: "Slot 3" },
        { name: "Omkar Shete", Group: "Slot 3" },
        { name: "Pihoo Bhargava", Group: "Slot 3" },
        { name: "Govinda Talreja", Group: "Slot 3" },
        { name: "Aditya Rao", Group: "Slot 3" },
        { name: "Ansari Faiz", Group: "Slot 3" },
        { name: "Ansari Mohd Faiz ", Group: "Slot 3" },
        { name: "Anurag Rangole", Group: "Slot 3" },
        { name: "Dhruv Chechani", Group: "Slot 3" },
        { name: "Dimple Agarwal", Group: "Slot 3" },
        { name: "Mridul Singhal", Group: "Slot 3" },
        { name: "Mukta", Group: "Slot 3" },
        { name: "Neil Bhutada", Group: "Slot 3" },
        { name: "Nimish godbole", Group: "Slot 3" },
        { name: "Nitin", Group: "Slot 3" },
        { name: "Om Patel", Group: "Slot 3" },
        { name: "Omkar Dutta", Group: "Slot 3" },
        { name: "PARTH RAINCHWAR", Group: "Slot 3" },
        { name: "Aashi tapadia", Group: "Slot 4" },
        { name: "Chebolu abhishek", Group: "Slot 4" },
        { name: "Aditya kothavade", Group: "Slot 4" },
        { name: "Advait Mukund Pathak", Group: "Slot 4" },
        { name: "Anuj Todkar", Group: "Slot 4" },
        { name: "Archit", Group: "Slot 4" },
        { name: "Atharva Jibhakate", Group: "Slot 4" },
        { name: "Dhruv Samadhiya", Group: "Slot 4" },
        { name: "SHRADDHA JADHAV", Group: "Slot 4" },
        { name: "Shashikala kulkarni ", Group: "Slot 4" },
        { name: "Shaunak Bachal", Group: "Slot 4" },
        { name: "Tanmay Kapoor", Group: "Slot 4" },
        { name: "umang sakuja", Group: "Slot 4" },
        { name: "Saloni gandhi", Group: "Slot 4" },
        { name: "Sarthak Oke", Group: "Slot 4" },
        { name: "Shshikala kulkarni ", Group: "Slot 4" },
        { name: "Vidipta Sadhwani ", Group: "Slot 4" },
        { name: "Aditya Meshram", Group: "Slot 4" },
        { name: "Archit jain", Group: "Slot 4" },
        { name: "Dhruv jain", Group: "Slot 4" },
        { name: "Divyang bagla", Group: "Slot 4" },
        { name: "Amey Bhide", Group: "Slot 5" },
        { name: "Geet Kedia ", Group: "Slot 5" },
        { name: "Amrita Ghosh", Group: "Slot 5" },
        { name: "Kewal Padamwar", Group: "Slot 5" },
        { name: "Atharva Joshi", Group: "Slot 5" },
        { name: "YASHRAJ PAWAR", Group: "Slot 5" },
        { name: "Prajyot Chandrashekhar Bhamare", Group: "Slot 5" },
        { name: "Ravi Yadav", Group: "Slot 5" },
        { name: "Shree Patra", Group: "Slot 5" },
        { name: "Rutumbara Chakor ", Group: "Slot 5" },
        { name: "Rashmita chauhan", Group: "Slot 5" },
        { name: "Sahil sunil kakad", Group: "Slot 5" },
        { name: "Sarvesh darade", Group: "Slot 5" },
        { name: "Shrey bhonsle", Group: "Slot 5" },
        { name: "Akhilesh Manil Moorthy", Group: "Slot 5" },
        { name: "Amey Bhide", Group: "Slot 5" },
        { name: "Aniket Inamdar", Group: "Slot 5" },
        { name: "Atharv Ganla", Group: "Slot 5" },
        { name: "Prajyot Zankar", Group: "Slot 5" },
        { name: "Pranav Parnerkar", Group: "Slot 5" },
        { name: "Ravneet kaur", Group: "Slot 5" },
        { name: "Rishab Koul", Group: "Slot 5" },
        { name: "Hrushikesh Nemade", Group: "Slot 6" },
        { name: "Omkar Ramchandra Shinde", Group: "Slot 6" },
        { name: "Praveen Kumar Gupta ", Group: "Slot 6" },
        { name: "Prachi Jain", Group: "Slot 6" },
        { name: "Rahul Sannat", Group: "Slot 6" },
        { name: "Saloni saxena", Group: "Slot 6" },
        { name: "Sarvarth Deepak Patil", Group: "Slot 6" },
        { name: "Shreyas Patil ", Group: "Slot 6" },
        { name: "Shubham Shah", Group: "Slot 6" },
        { name: "Stuti jajodia", Group: "Slot 6" },
        { name: "Mufaddal jiruwala", Group: "Slot 6" },
        { name: "Prajakta khamkar", Group: "Slot 6" },
        { name: "Rishabh Shetty", Group: "Slot 6" },
        { name: "Sarvarth Patil", Group: "Slot 6" },
        { name: "Sarvesh maruti", Group: "Slot 6" },
        { name: "Savinay Mengi", Group: "Slot 6" },
        { name: "SEJAL SAWARKAR", Group: "Slot 6" },
        { name: "Shivansh Singh", Group: "Slot 6" },
        { name: "Tanmay Das", Group: "Slot 6" },
        { name: "Yash", Group: "Slot 6" },
        { name: "Omkar Najan", Group: "Slot 7" },
        { name: "Parth Sarda", Group: "Slot 7" },
        { name: "Rohit Patil", Group: "Slot 7" },
        { name: "Shreeraj patil", Group: "Slot 7" },
        { name: "Utkarsh Sarin", Group: "Slot 7" },
        { name: "Viren Patel", Group: "Slot 7" },
        { name: "Prabhat Panwar", Group: "Slot 7" },
        { name: "Pushkar Rajesh Jain", Group: "Slot 7" },
        { name: "Rishab Saxena ", Group: "Slot 7" },
        { name: "Rishabh Sahay", Group: "Slot 7" },
        { name: "Rohit Jadhav", Group: "Slot 7" },
        { name: "Ruchin Shroff", Group: "Slot 7" },
        { name: "Samiran Bhattacharya ", Group: "Slot 7" },
        { name: "Sharayu dosalwar", Group: "Slot 7" },
        { name: "Shivam tripathi", Group: "Slot 7" },
        { name: "Shreyansh Agrawal ", Group: "Slot 7" },
        { name: "shruti kankriya", Group: "Slot 7" },
        { name: "siddhartha yadav", Group: "Slot 7" },
        { name: "Smit arekar", Group: "Slot 7" },
        { name: "Soham Patil", Group: "Slot 7" },
        { name: "Soham Pinglikar", Group: "Slot 7" },
        { name: "Stuti", Group: "Slot 7" },
        { name: "Vedant Bhonde", Group: "Slot 7" },
        { name: "Vedant karle", Group: "Slot 7" },
        { name: "Atharv Bhujade", Group: "Slot 8" },
        { name: "Afrid Bagwan", Group: "Slot 8" },
        { name: "Ayush Gupta", Group: "Slot 8" },
        { name: "Chinmay Ravindra Amrutkar", Group: "Slot 8" },
        { name: "Divya Gugale", Group: "Slot 8" },
        { name: "Harsh oswal ", Group: "Slot 8" },
        { name: "Jerome Wilson ", Group: "Slot 8" },
        { name: "Keyur SUNIT Chaudhari ", Group: "Slot 8" },
        { name: "Mohit Chaudhari", Group: "Slot 8" },
        { name: "Naveen Maheshwari", Group: "Slot 8" },
        { name: "Nihal Raj", Group: "Slot 8" },
        { name: "Omkar Chandorkar", Group: "Slot 8" },
        { name: "Adwaiy Randale", Group: "Slot 8" },
        { name: "Akshay Uchale", Group: "Slot 8" },
        { name: "Alpesh Anchliya", Group: "Slot 8" },
        { name: "Aniket Singh", Group: "Slot 8" },
        { name: "Ashish Joshi ", Group: "Slot 8" },
        { name: "Harshit Bhageria", Group: "Slot 8" },
        { name: "Manas kalangan", Group: "Slot 8" },
        { name: "Neel Rane", Group: "Slot 8" },
        { name: "Abhay Rana", Group: "Slot 9" },
        { name: "Aditya Choudhary", Group: "Slot 9" },
        { name: "Aditya Konnur ", Group: "Slot 9" },
        { name: "Aishwary", Group: "Slot 9" },
        { name: "Ayush Gour", Group: "Slot 9" },
        { name: "mustansir", Group: "Slot 9" },
        { name: "Disha Gidwani", Group: "Slot 9" },
        { name: "Aayushi lilha", Group: "Slot 9" },
        { name: "Malhar Dhawle", Group: "Slot 9" },
        { name: "Mayannk Kumar Singh", Group: "Slot 9" },
        { name: "Mitali Jain ", Group: "Slot 9" },
        { name: "Parth Zile", Group: "Slot 9" },
        { name: "Prakhar Singh Rajput", Group: "Slot 9" },
        { name: "RAHUL KUMAR ", Group: "Slot 9" },
        { name: "Rohit", Group: "Slot 9" },
        { name: "ABDULAHAD SAYYAD", Group: "Slot 9" },
        { name: "Siddhant Bhura ", Group: "Slot 9" },
        { name: "Yash Nawghare", Group: "Slot 9" },
        { name: "Vishwajeet shinde", Group: "Slot 9" },
        { name: "Anand Rituraj", Group: "Slot 9" },
        { name: "Luvkumar Sharma", Group: "Slot 9" },
        { name: "Pranav patil", Group: "Slot 9" },
        { name: "Prathamesh", Group: "Slot 9" },
        { name: "Ruturaj Ashok Desai", Group: "Slot 9" },
        { name: "Shara", Group: "Slot 9" },
        { name: "SHIVANSH SINHA", Group: "Slot 9" },
        { name: "Uday", Group: "Slot 9" }
      ];
    },
    65: function(e, a, t) {
      e.exports = t.p + "static/media/App1.0961f857.png";
    },
    66: function(e, a, t) {
      e.exports = t.p + "static/media/App2.55a60b13.png";
    },
    67: function(e, a, t) {
      e.exports = t.p + "static/media/App3.615a94d1.png";
    },
    68: function(e, a, t) {
      e.exports = t.p + "static/media/App4.c084a890.png";
    },
    69: function(e, a, t) {
      e.exports = t.p + "static/media/PWA1.ce2d1259.png";
    },
    70: function(e, a, t) {
      e.exports = t.p + "static/media/PWA2.b26a8db2.png";
    },
    71: function(e, a, t) {
      e.exports = t.p + "static/media/PWA3.bcd406f3.png";
    },
    78: function(e, a, t) {
      e.exports = t.p + "static/media/codersera.35fc952a.png";
    },
    80: function(e, a, t) {
      e.exports = t(120);
    },
    85: function(e, a, t) {
    }
  },
  [[80, 1, 2]]
]);
//# sourceMappingURL=main.f93b0a93.chunk.js.map
