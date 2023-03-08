(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [4304], {
        112907: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                GqlRequest: () => C
            });
            var r = n(777754),
                i = n(479928);
            const s = p("\n\tquery GetLiveStreams(\n\t\t$locale: String!,\n\t) {\n\t\tstreams(\n\t\t\tfilter: {\n\t\t\t\tstate: live,\n\t\t\t\tshowPrivateStreams: false,\n\t\t\t\tlocale: $locale\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tisBroadcasting\n\t\t}\n\t}\n"),
                a = p("\n\tquery GetUserStream(\n\t\t$userId: Int!,\n\t) {\n\t\tstreams(\n\t\t\tfilter: {\n\t\t\t\tstate: live,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 1\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tisBroadcasting\n\t\t\tyoutubeId\n\t\t\ttwitchId\n\t\t\tpermanent\n\t\t\tstate\n\t\t}\n\t}\n"),
                o = p("\n\tquery GetUserStreams(\n\t\t$userId: Int!,\n\t\t$locale: String,\n\t) {\n\t\tlive: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: live,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { viewersCount: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t\tencoderId\n\t\t}\n\n\t\tscheduled: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: scheduled,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { plannedTime: 1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\n\t\tended: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: ended,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { startTime: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\n\t\tlivetrading: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: livetrading,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { startTime: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\n\t\teducation: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: education,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { startTime: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\n\t\tanalysis: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: analysis,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { startTime: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\n\t\tofftopic: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: offtopic,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { startTime: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\t}\n"),
                l = p("\n\tmutation CreateStream(\n\t\t$title: String!,\n\t\t$plannedTime: DateTime!,\n\t\t$category: Category!,\n\t\t$visibility: Visibility!,\n\t\t$encoder: Encoder,\n\t\t$description: String!,\n\t\t$locale: String!,\n\t\t$youtubeToken: String,\n\t\t$twitchToken: String,\n\t\t$permanent: Boolean,\n\t) {\n\t\tcreateStream(input: {\n\t\t\ttitle: $title,\n\t\t\tdescription: $description,\n\t\t\tlocale: $locale,\n\t\t\tplannedTime: $plannedTime,\n\t\t\tcategory: $category,\n\t\t\tvisibility: $visibility,\n\t\t\tencoder: $encoder,\n\t\t\trecord: true,\n\t\t\tyoutubeToken: $youtubeToken\n\t\t\ttwitchToken: $twitchToken\n\t\t\tpermanent: $permanent\n\t\t}) {\n\t\t\turl\n\t\t\tstate\n\t\t\ttitle\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tcategory\n\t\t\tvisibility\n\t\t\tplannedTime\n\t\t\tdescription\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tstreamingToken\n\t\t\tyoutubeId\n\t\t\ttwitchId\n\t\t}\n\t}\n"),
                u = p("\n\tmutation UpdateStream(\n\t\t$url: ID!,\n\t\t$title: String,\n\t\t$category: Category,\n\t\t$description: String,\n\t\t$visibility: Visibility,\n\t\t$picked: Boolean,\n\t\t$plannedTime: DateTime,\n\t\t$encoder: Encoder,\n\t\t$youtubeToken: String,\n\t\t$twitchToken: String,\n\t\t$permanent: Boolean,\n\t\t$previewName: String,\n\t) {\n\t\tupdateStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\ttitle: $title,\n\t\t\t\tencoder: $encoder,\n\t\t\t\tcategory: $category,\n\t\t\t\tvisibility: $visibility,\n\t\t\t\tpicked: $picked,\n\t\t\t\tdescription: $description,\n\t\t\t\tplannedTime: $plannedTime\n\t\t\t\tyoutubeToken: $youtubeToken,\n\t\t\t\ttwitchToken: $twitchToken,\n\t\t\t\tpermanent: $permanent,\n\t\t\t\tpreviewName: $previewName\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\ttitle\n\t\t\tencoder\n\t\t\tdescription\n\t\t\tcategory\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tviewersCount\n\t\t\tyoutubeId\n\t\t\ttwitchId\n\t\t\tpermanent\n\t\t\tpreviewName\n\t\t}\n\t}\n"),
                T = p("\n\tmutation DeleteStream(\n\t\t$url: ID!,\n\t\t$youtubeToken: String\n\t\t$twitchToken: String\n\t) {\n\t\tdeleteStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\tyoutubeToken: $youtubeToken\n\t\t\t\ttwitchToken: $twitchToken\n\t\t\t}\n\t\t) {\n\t\t\ttitle\n\t\t}\n\t}\n"),
                d = p("\n\tmutation StopStream(\n\t\t$url: ID!,\n\t\t$youtubeToken: String\n\t\t$twitchToken: String\n\t) {\n\t\tstopStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\tyoutubeToken: $youtubeToken\n\t\t\t\ttwitchToken: $twitchToken\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tstate\n\t\t\ttitle\n\t\t\tendTime\n\t\t}\n\t}\n"),
                _ = p("\n\tmutation StopStream(\n\t\t$url: ID!,\n\t\t$youtubeToken: String\n\t\t$twitchToken: String\n\t) {\n\t\tstopStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\tyoutubeToken: $youtubeToken\n\t\t\t\ttwitchToken: $twitchToken\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tstate\n\t\t\ttitle\n\t\t\tendTime\n\t\t}\n\t\tdeleteRecord (\n\t\t\turl: $url\n\t\t)\n\t}\n"),
                S = p("\n\tmutation DeleteRecord (\n\t\t\t$url: ID!\n\t\t) {\n\t\t\tdeleteRecord (\n\t\t\t\turl: $url\n\t\t\t)\n\t}\n"),
                c = p("\n\tmutation StartStream(\n\t\t$url: ID!,\n\t\t$youtubeToken: String,\n\t\t$twitchToken: String\n\t) {\n\t\tstartStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\tyoutubeToken: $youtubeToken\n\t\t\t\ttwitchToken: $twitchToken\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tstartTime\n\t\t}\n\t}\n"),
                m = p("\n\tquery GetStream(\n\t\t$url: ID!\n\t) {\n\t\tstream (\n\t\t\turl: $url\n\t\t) {\n\t\t\turl\n\t\t\tuserId\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\tdescription\n\t\t\tplannedTime\n\t\t\tstartTime\n\t\t\tendTime\n\t\t\tstate\n\t\t\trecord\n\t\t\tcategory\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t\tencoderId\n\t\t\tyoutubeId\n\t\t\ttwitchId\n\t\t}\n\t}\n"),
                E = p("\n\tquery GetStream(\n\t\t$url: ID!\n\t) {\n\t\tstream (\n\t\t\turl: $url\n\t\t) {\n\t\t\tstreamingToken\n\t\t\tisBroadcasting\n\t\t}\n\t}\n"),
                I = p("\n\tquery GetStats {\n\t\tstats {\n\t\t\tviews {\n\t\t\t\ttime\n\t\t\t\tvalue\n\t\t\t}\n\t\t\tviewers {\n\t\t\t\ttime\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n");

            function p(t) {
                return t.replace(/[\n\t]+/g, " ").trim()
            }
            var g;
            ! function(t) {
                t.ListLiveStreamUrl = "ListLiveStreamUrl", t.LiveStreamUrl = "LiveStreamUrl", t.Streams = "Streams", t.CreateStream = "CreateStream", t.UpdateStream = "UpdateStream", t.DeleteStream = "DeleteStream", t.StopStream = "StopStream", t.StopStreamSave = "StopStreamSave", t.DeleteRecord = "DeleteRecord", t.StartStream = "StartStream", t.GetStream = "GetStream", t.GetToken = "GetToken", t.GetStreamsStats = "GetStreamsStats"
            }(g || (g = {}));
            var R = n(779923),
                A = n(664224),
                O = n(194806),
                h = n(286293);
            let v = null;
            class C {
                constructor() {
                    if (v) return v;
                    v = this, this._gqlQueriesStrings = {
                        [g.ListLiveStreamUrl]: s,
                        [g.LiveStreamUrl]: a,
                        [g.Streams]: o,
                        [g.CreateStream]: l,
                        [g.UpdateStream]: u,
                        [g.DeleteStream]: T,
                        [g.StopStream]: d,
                        [g.StopStreamSave]: _,
                        [g.DeleteRecord]: S,
                        [g.StartStream]: c,
                        [g.GetStream]: m,
                        [g.GetToken]: E,
                        [g.GetStreamsStats]: I
                    };
                    let t = (0, O.getGraphqlUrl)();
                    return !t && window && ((0, O.setStreamsConfig)({
                        mediaServerUrl: window.TV_LIVE_MEDIA_SERVER_DOMAIN,
                        mediaServerRtmpUrl: window.TV_LIVE_MEDIA_SERVER_RTMP_URL,
                        tvLiveUrl: window.TV_LIVE_DIRECTOR_DOMAIN,
                        liveMediaUrls: window.TV_LIVE_MEDIA_SERVER_LIVE_URLS,
                        recordMediaUrl: window.TV_LIVE_MEDIA_URL
                    }), t = (0, O.getGraphqlUrl)()), this._gqlUrl = t, this._gqlClient = new i.GraphQLClient(this._gqlUrl, {
                        headers: this._getHeadersObject(),
                        credentials: "include",
                        mode: "cors"
                    }), window && window.loginStateChange.subscribe(this, this._onLoginStateChange), v
                }
                getStreamsStats() {
                    const t = this._gqlQueriesStrings[g.GetStreamsStats];
                    return this._sendRequest(t).then((t => t))
                }
                getListLiveStreamUrl(t) {
                    const e = this._gqlQueriesStrings[g.ListLiveStreamUrl];
                    return this._sendRequest(e, {
                        locale: t
                    }).then((t => 0 === t.streams.length ? null : t))
                }
                getLiveStreamUrl(t, e = !1) {
                    const n = this._gqlQueriesStrings[g.LiveStreamUrl];
                    return this._sendRequest(n, {
                        userId: t
                    }).then((t => {
                        if (0 === t.streams.filter((t => t.state === O.StreamState.Live)).length) return null;
                        const {
                            url: n,
                            isBroadcasting: r,
                            youtubeId: i,
                            twitchId: s
                        } = t.streams[0];
                        return r || !e ? [n, i, s] : null
                    }))
                }
                getStreams(t) {
                    const e = this._gqlQueriesStrings[g.Streams];
                    return this._sendRequest(e, t)
                }
                createStream(t) {
                    const {
                        plannedTime: e
                    } = t, n = this._gqlQueriesStrings[g.CreateStream], r = e ? e.toISOString() : (new Date).toISOString(), i = Object.assign({}, t, {
                        plannedTime: r
                    });
                    return this._sendRequest(n, i)
                }
                updateStream(t) {
                    const e = this._gqlQueriesStrings[g.UpdateStream];
                    return this._sendRequest(e, t)
                }
                deleteStream(t) {
                    const e = this._gqlQueriesStrings[g.DeleteStream];
                    return this._sendRequest(e, t)
                }
                async stopStream(t, e) {
                    const n = e ? this._gqlQueriesStrings[g.StopStream] : this._gqlQueriesStrings[g.StopStreamSave];
                    return (await this._sendRequest(n, t)).stopStream
                }
                deleteRecord(t) {
                    const e = this._gqlQueriesStrings[g.DeleteRecord];
                    return this._sendRequest(e, t).then((t => t.deleteRecord))
                }
                startStream(t) {
                    const e = this._gqlQueriesStrings[g.StartStream];
                    return this._sendRequest(e, t)
                }
                getStream(t) {
                    const e = this._gqlQueriesStrings[g.GetStream];
                    return this._sendRequest(e, t).then((t => t.stream))
                }
                getToken(t) {
                    const e = this._gqlQueriesStrings[g.GetToken];
                    return this._sendRequest(e, t).then((t => t.stream))
                }
                previewUpload(t) {
                    const e = {
                            query: `\n\t\t\t\tmutation(\n\t\t\t\t\t$file: Upload!\n\t\t\t\t) {\n\t\t\t\t\tuploadPreview(\n\t\t\t\t\t\turl: "${t.url}",\n\t\t\t\t\t\tfile: $file\n\t\t\t\t\t) {\n\t\t\t\t\t\tfilename,\n\t\t\t\t\t\tmimetype,\n\t\t\t\t\t\tencoding\n\t\t\t\t\t}\n\t\t\t\t}`,
                            variables: {
                                file: null
                            }
                        },
                        n = new FormData;
                    return n.append("operations", JSON.stringify(e)), n.append("map", '{ "0": ["variables.file"] }'), n.append("0", t.file), fetch(this._gqlUrl, {
                        method: "POST",
                        headers: new Headers(this._getHeadersObject()),
                        body: n,
                        credentials: "include",
                        mode: "cors"
                    }).then((t => t.json()))
                }
                _sendRequest(t, e) {
                    return this._gqlClient.request(t, e).catch((async t => {
                        var e;
                        const i = `GraphQL Error (Code: ${t.response.status}`,
                            {
                                errors: s = [{
                                    message: i,
                                    extensions: {
                                        code: O.TvLiveErrorCode.InternalServerError
                                    }
                                }]
                            } = t.response,
                            a = s[0];
                        let o, l = r.t(null, void 0, n(482751));
                        (null === (e = a.extensions) || void 0 === e ? void 0 : e.code) === O.TvLiveErrorCode.YoutubeError && (l = r.t(null, void 0, n(414437)), o = h.solutionIds.YOUTUBE_ERROR);
                        const u = await Promise.resolve().then(n.t.bind(n, 809350, 23)),
                            T = o ? [{
                                name: "Learn more",
                                title: r.t(null, void 0, n(718429)),
                                appearance: "stroke",
                                intent: "default",
                                handler: () => {
                                    (0, A.showSupportDialog)({
                                        solutionId: o
                                    })
                                }
                            }] : void 0;
                        (0, R.showWarning)({
                            title: l,
                            text: u.stripTags(a.message),
                            intentButton: "danger",
                            closeOnOutsideClick: !1,
                            actions: T
                        })
                    }))
                }
                _getHeadersObject() {
                    return {
                        "X-UserId": this._getUserId(),
                        "X-UserProPlan": window.user.pro_plan || "",
                        "X-UserPerm": '{ "can_create_streams": 1, "is_streams_admin": 1 }'
                    }
                }
                _getUserId() {
                    return window.user.id ? String(window.user.id) : ""
                }
                _onLoginStateChange() {
                    this._gqlClient.setHeaders(this._getHeadersObject())
                }
            }
        },
        286293: (t, e, n) => {
            "use strict";
            n.d(e, {
                solutionIds: () => r
            });
            const r = JSON.parse('{"EXTENDED_HOURS":43000502023,"PRE_MARKET":43000502023,"POST_MARKET":43000502023,"SPREAD_CHARTS":43000502298,"ALERTS":43000520149,"ALERT_ON_STRATEGY":43000481368,"ALERT_WEBHOOK":43000529348,"ALERT_DESCRIPTION_PLACEHOLDER":43000531021,"ALERT_RECEIVE_NOTIFICATIONS_OH_PHONE":43000474389,"ALERT_USE_ALTERNATIVE_EMAIL":43000474394,"VOLUME_PROFILE":43000502040,"VOLUME_PROFILE_INDICATOR":43000557450,"RENKO":43000502284,"KAGI":43000502272,"LINE_BREAK":43000502273,"PNF":43000502276,"FINANCIAL_DATA":43000543506,"BROKER_RATING":43000542490,"CRYPTO_MARKET_CAP":43000540941,"CRYPTO_PAYMENT":43000485536,"ALERT_ON_SPREAD":43000478406,"ALERT_ON_LOG_SCALE":43000690942,"ALERT_ON_CUSTOM_SCRIPT":43000478415,"ALERT_FUNCTION":43000597494,"SMS_VERIFICATION":43000553429,"MAGNET_MODE":43000537270,"PINE_CANNOT_DETERMINE":43000587849,"PRIVACY_SETTINGS":43000548335,"PUBLICATION_TYPE":43000609497,"SCRIPT_ACCESS":43000482573,"MEMORY_LIMITS_EXCEEDED":43000590233,"FREE_USER_FAQS":43000590947,"STRATEGY_UNREALISTIC_RESULTS":43000481029,"STRATEGY_FUTURE_DATA":43000614705,"STREAM_RULES":43000591348,"HOW_TO_USE_PAPER":43000516466,"HOW_TO_USE_CQG":43000516372,"HOW_TO_USE_OANDA":43000516375,"HOW_TO_USE_FOREXCOM":43000516374,"FAVORITE_IDEA":43000555216,"YOUTUBE_ERROR":43000612153,"AUTHORS_INSTRUCTIONS_PUBCLICATION":43000549951,"AUTHORS_INSTRUCTIONS_EDIT":43000614618,"SCRIPT_INSTRUCTIONS":43000482573,"BAR_REPLAY_UNAVAILABILITY":43000475470,"WHAT_IS_CBOE_BZX_EXCHANGE":43000473924,"GOPRO_UPGRADE_DESCRIPTION":43000473324,"GOPRO_DOWNGRADE_DESCRIPTION":43000485437,"BROKERAGE_REVIEWS":43000591351,"CHANGE_SUBSCRIPTION":43000635806,"PINE_LIBRARY_INFO":43000638371,"HOW_TO_CREATE_A_STREAM":43000646171,"HOW_DO_I_UPDATE_DESKTOP_APP":43000647779,"TECHNICAL_RATINGS":43000614331,"BACKTESTING_WIDGET":43000562362,"DEEP_BACKTESTING_WIDGET":43000670566,"DEEP_BACKTESTING":43000666199,"DEEP_BACKTESTING_AVAILABLE_DATA":43000668210,"BETA_BROKERS":43000673434,"VIDEO_UPLOAD_FAILED":43000666607,"VIDEO_DEVICE_ACCESS":43000677209,"PUBLIC_INVITE_ONLY_SCRIPTS":43000614617,"HOW_DOES_BRACKETS_MANAGEMENT_WORK":43000631987,"HOW_TO_SEE_THE_DEEPEST_HIST_DATA":43000687053,"I_CANT_SEE_ALL_HIST_DATA_ON_RES_LOWER_THAN_DAY":43000480679,"GET_A_REFUND":43000485430,"USE_SETTLEMENT_AS_CLOSE_ON_DAILY_INTREVAL":43000685268,"ADJUST_FOR_CONTRACT_CHANGES":43000685266,"WHY_IS_MY_ACCOUNT_BANNED":43000674726,"HOW_TO_PUBLISH_A_VIDEO_IDEA":43000476752,"WHAT_ARE_TRADINGVIEW_LIVE_STREAMS_BEST_PRACTICES":43000685377,"TELL_ME_MORE_ABOUT_THE_COMMUNITY_SCRIPTS":43000558522,"HOW_TO_POST_AWESOME_IDEAS_AND_GET_LOTS_OF_LIKES":43000603748,"CONNECTIONS_LIMIT_EXCEEDED":43000693877}')
        },
        718429: t => {
            t.exports = {
                ar: ["تعرف على المزيد"],
                ca_ES: ["Més informació"],
                cs: ["Přečtěte si více"],
                de: ["Mehr erfahren"],
                el: "Learn more",
                en: "Learn more",
                es: ["Más información"],
                fa: "Learn more",
                fr: ["En savoir plus"],
                he_IL: ["למד עוד"],
                hu_HU: ["Tudj meg többet"],
                id_ID: ["Pelajari lebih lanjut"],
                it: ["Scopri di più"],
                ja: ["詳細を確認"],
                ko: ["자세히 보기"],
                ms_MY: ["Ketahui lebih lanjut"],
                nl_NL: "Learn more",
                pl: ["Dowiedz się więcej"],
                pt: ["Saiba mais"],
                ro: "Learn more",
                ru: ["Узнать больше"],
                sv: ["Läs mer"],
                th: ["เรียนรู้เพิ่มเติม"],
                tr: ["Daha fazla öğren"],
                vi: ["Tìm hiểu thêm"],
                zh: ["了解更多"],
                zh_TW: ["了解更多"]
            }
        },
        414437: t => {
            t.exports = {
                ar: ["خطأ في YouTube"],
                ca_ES: "YouTube error",
                cs: "YouTube error",
                de: ["YouTube Fehler"],
                el: "YouTube error",
                en: "YouTube error",
                es: ["Error de YouTube"],
                fa: "YouTube error",
                fr: ["Erreur YouTube"],
                he_IL: ["שגיאה של YouTube"],
                hu_HU: "YouTube error",
                id_ID: ["Error YouTube"],
                it: ["Errore YouTube"],
                ja: ["YouTube エラー"],
                ko: ["유튜브 에러"],
                ms_MY: ["Kesilapan YouTube"],
                nl_NL: "YouTube error",
                pl: ["Błąd YouTube"],
                pt: ["erros do YouTube"],
                ro: "YouTube error",
                ru: ["Ошибка YouTube"],
                sv: ["YouTube fel"],
                th: ["เกิดข้อผิดพลาดกับ YouTube"],
                tr: ["YouTube hatası"],
                vi: ["Lỗi YouTube"],
                zh: ["YouTube错误"],
                zh_TW: ["YouTube錯誤"]
            }
        }
    }
]);