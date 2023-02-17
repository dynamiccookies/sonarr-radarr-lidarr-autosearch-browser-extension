 var base64Icons = [
        {
            id: 'sonarr',
            base64: 'data:image/png;base64,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'
        }, {
            id: 'radarr',
            base64: 'data:image/png;base64,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'
        }, {
            id: 'lidarr',
            base64: 'data:image/png;base64,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'
        }
    ],
    integrations = [
        /* sonarr version which doesn't work with id search */
        {
            id: 'imdb',
            rules: [
                {
                    siteId: 'sonarr',
                    match: {
                        pattern: /tv_show/i,
                        operator: 'eq'
                    }
                }
            ],
            search: {
                containerSelector: 'h1',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'imdb.com',
                containerSelector: 'meta[property="og:type"]',
                attribute: 'content',
            },
            icon: {
                containerSelector: 'h1',
                locator: 'prepend',
                imgStyles: 'width: 35px; margin: -8px 10px 0 0;'
            }
        },
        /* radarr version which works with id search */
        {
            id: 'imdb',
            rules: [
                {
                    siteId: 'radarr',
                    match: {
                        pattern: /movie/i,
                        operator: 'eq'
                    }
                }
            ],
            search: {
                containerSelector: 'link[rel="canonical"]',
                selectorType: 'href',
                modifiers: [
                    {
                        type: 'regex-match',
                        pattern: /(?<search>tt\d{5,10})/i
                    }, {
                        type: 'prepend',
                        var: 'imdb:'
                    }
                ]
            },
            match: {
                term: 'imdb.com',
                containerSelector: 'meta[property="og:type"]',
                attribute: 'content',
            },
            icon: {
                containerSelector: 'h1',
                locator: 'prepend',
                imgStyles: 'width: 35px; margin: -8px 10px 0 0;'
            }
        },
        // tmdb id doesn't work with sonarr
        {
            id: 'tmdb',
            rules: [
                {
                    siteId: 'sonarr',
                    match: {
                        pattern: /themoviedb\.org\/tv\//i,
                        operator: 'eq'
                    }
                }
            ],
            search: {
                containerSelector: '.header .title h2 a',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'themoviedb.org',
                containerSelector: 'link[rel="canonical"]',
                attribute: 'href'
            },
            icon: {
                containerSelector: '.header .title h2',
                locator: 'prepend',
                imgStyles: 'width: 25px; margin: -8px 10px 0 0;'
            }
        },
        // radarr works with tmdb id
        {
            id: 'tmdb',
            rules: [
                {
                    siteId: 'radarr',
                    match: {
                        pattern: /themoviedb\.org\/movie\//i,
                        operator: 'eq'
                    }
                }
            ],
            search: {
                containerSelector: 'link[rel="canonical"]',
                selectorType: 'href',
                modifiers: [
                    {
                        type: 'regex-match',
                        pattern: /\/(?<search>\d{4,10})-/i
                    }, {
                        type: 'prepend',
                        var: 'tmdb:'
                    }
                ]
            },
            match: {
                term: 'themoviedb.org',
                containerSelector: 'link[rel="canonical"]',
                attribute: 'href'
            },
            icon: {
                containerSelector: '.header .title h2',
                locator: 'prepend',
                imgStyles: 'width: 25px; margin: -8px 10px 0 0;'
            }
        },
        // tvdb for sonarr, uses tvdb:xxxxx type search
        {
            id: 'tvdb',
            rules: [
                {
                    siteId: 'sonarr',
                    match: {
                        pattern: /thetvdb\.com\sseries/i,
                        operator: 'eq'
                    }
                }
            ],
            search: {
                containerSelector: '#series_basic_info > ul > li:first-of-type > span',
                selectorType: 'text',
                modifiers: [
                    {
                        type: 'prepend',
                        var: 'tvdb:'
                    }
                ]
            },
            match: {
                term: 'thetvdb.com',
                containerSelector: '#series_basic_info',
                attribute: 'text'
            },
            icon: {
                containerSelector: '#series_title',
                locator: 'prepend',
                imgStyles: 'width: 25px; margin: -8px 10px 0 0;'
            }
        },
        // tvdb for radarr, uses text search as id search not working as tested (v0.9)
        {
            id: 'tvdb',
            rules: [
                {
                    siteId: 'radarr',
                    match: {
                        pattern: /thetvdb\.com\smovie/i,
                        operator: 'eq'
                    }
                }
            ],
            search: {
                containerSelector: '#series_title',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'thetvdb.com',
                containerSelector: '#series_basic_info',
                attribute: 'text'
            },
            icon: {
                containerSelector: '#series_title',
                locator: 'prepend',
                imgStyles: 'width: 25px; margin: -8px 10px 0 0;'
            }
        },
        // trakt for sonarr, uses tvdb id
        // instance for tv series view
        {
            id: 'trakt',
            deferMs: 3000,
            rules: [
                {
                    siteId: 'sonarr',
                    match: {
                        pattern: /tv/i,
                        operator: 'eq'
                    }
                }
            ],
            search: {
                containerSelector: 'a[href*="tvdb.com"]',
                selectorType: 'href',
                modifiers: [
                    {
                        type: 'regex-match',
                        pattern: /\/(?<search>\d{4,10})/i
                    }, {
                        type: 'prepend',
                        var: 'tvdb:'
                    }
                ]
            },
            match: {
                term: 'trakt.tv',
                containerSelector: '#main-nav ul li a.selected',
                attribute: 'text'
            },
            icon: {
                containerSelector: 'h1',
                locator: 'prepend',
                imgStyles: 'width: 25px; margin: -8px 10px 0 0;'
            }
        },
        // instance for tv series group view
        {
            id: 'trakt',
            deferMs: 3000,
            rules: [
                {
                    siteId: 'sonarr',
                    match: {
                        pattern: /tv/i,
                        operator: 'eq'
                    }
                }
            ],
            search: {
                containerSelector: '.titles > h3',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'trakt.tv',
                containerSelector: '#main-nav ul li a.selected',
                attribute: 'text'
            },
            icon: {
                containerSelector: '.actions',
                locator: 'append',
                imgStyles: 'width: 23px; margin: 0 0 2px 10px;'
            }
        },
        // trakt for radarr, uses tmdb id
        {
            id: 'trakt',
            deferMs: 3000,
            rules: [
                {
                    siteId: 'radarr',
                    match: {
                        pattern: /movies/i,
                        operator: 'eq'
                    }
                }
            ],
            search: {
                containerSelector: 'a[href*="moviedb.org"]',
                selectorType: 'href',
                modifiers: [
                    {
                        type: 'regex-match',
                        pattern: /\/(?<search>\d{4,10})/i
                    }, {
                        type: 'prepend',
                        var: 'tmdb:'
                    }
                ]
            },
            match: {
                term: 'trakt.tv',
                containerSelector: '#main-nav ul li a.selected',
                attribute: 'text'
            },
            icon: {
                containerSelector: 'h1',
                locator: 'prepend',
                imgStyles: 'width: 25px; margin: -8px 10px 0 0;'
            }
        },
        // instance for trakt movies group view
        {
            id: 'trakt',
            deferMs: 3000,
            rules: [
                {
                    siteId: 'radarr',
                    match: {
                        pattern: /movies/i,
                        operator: 'eq'
                    }
                }
            ],
            search: {
                containerSelector: '.titles > h3',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'trakt.tv',
                containerSelector: '#main-nav ul li a.selected',
                attribute: 'text'
            },
            icon: {
                containerSelector: '.actions',
                locator: 'append',
                imgStyles: 'width: 23px; margin: 0 0 2px 10px;'
            }
        },
        {
            id: 'tvmaze',
            defaultSite: 'sonarr',
            search: {
                containerSelector: 'h1.show-for-medium',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'tvmaze.com/shows/'
            },
            icon: {
                containerSelector: 'h1.show-for-medium',
                locator: 'prepend',
                imgStyles: 'width: 32px; margin: -8px 10px 0 0;'
            }
        },
        {
            id: 'tvmaze',
            defaultSite: 'sonarr',
            search: {
                containerSelector: 'div.show-name',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'tvmaze.com/countdown'
            },
            icon: {
                containerSelector: 'div.show-name',
                locator: 'prepend',
                imgStyles: 'width: 24px; margin: -8px 10px 0 0;'
            }
        },
        {
            id: 'musicbrainz',
            defaultSite: 'lidarr',
            search: {
                containerSelector: '.artistheader > h1 > a',
                selectorType: 'href',
                modifiers: [
                    {
                        type: 'replace',
                        from: '/artist/',
                        to: 'lidarr:'
                    }
                ]
            },
            match: {
                term: 'musicbrainz.org/artist'
            },
            icon: {
                containerSelector: '.artistheader > h1',
                locator: 'prepend',
                imgStyles: 'width: 26px; margin: 0 5px -4px 0;'
            }
        },
        {
            id: 'letterboxd',
            defaultSite: 'radarr',
            search: {
                containerSelector: 'body',
                selectorType: 'data-tmdb-id',
                modifiers: [
                    {
                        type: 'prepend',
                        var: 'tmdb:'
                    }
                ]
            },
            match: {
                term: 'letterboxd.com/film/'
            },
            icon: {
                containerSelector: '#featured-film-header > h1',
                locator: 'prepend',
                imgStyles: 'width: 25px; margin: 8px 10px 0 0; float: left;'
            }
        },
        {
            id: 'tvcalendar',
            defaultSite: 'sonarr',
            search: {
                containerSelector: 'p[data-episode] > a:first-of-type',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'pogdesign.co.uk/cat'
            },
            icon: {
                containerSelector: 'p[data-episode]',
                locator: 'append',
                imgStyles: 'width: 18px; margin: -22px 0 0 0; float: right;'
            }
        },
        {
            id: 'rottentomatoes',
            defaultSite: 'radarr',
            search: {
                containerSelector: 'meta[property="og:title"]',
                selectorType: 'content',
                modifiers: []
            },
            match: {
                term: 'rottentomatoes.com/m'
            },
            icon: {
                containerSelector: 'h1.scoreboard__title',
                locator: 'prepend',
                imgStyles: 'width: 35px; margin: -8px 10px 0 0;'
            }
        },
        {
            id: 'rottentomatoes',
            defaultSite: 'sonarr',
            search: {
                containerSelector: 'meta[property="og:title"]',
                selectorType: 'content',
                modifiers: []
            },
            match: {
                term: 'rottentomatoes.com/tv'
            },
            icon: {
                containerSelector: 'h1.title',
                locator: 'prepend',
                imgStyles: 'width: 35px; margin: -8px 10px 0 0;'
            }
        },
        {
            id: 'metacritic',
            rules: [
                {
                    siteId: 'sonarr',
                    match: {
                        pattern: /tv/i,
                        operator: 'eq'
                    }
                },
                {
                    siteId: 'radarr',
                    match: {
                        pattern: /movie/i,
                        operator: 'eq'
                    }
                }
            ],
            search: {
                containerSelector: 'meta[property="og:title"]',
                selectorType: 'content',
                modifiers: []
            },
            match: {
                term: 'metacritic.com',
                containerSelector: 'meta[property="og:type"]',
                attribute: 'content'
            },
            icon: {
                containerSelector: 'h1',
                locator: 'prepend',
                imgStyles: 'width: 28px; margin: 0px 10px 0 0;'
            }
        },
        // simkl tv
        {
            id: 'simkl',
            deferMs: 1000,
            defaultSite: 'sonarr',
            search: {
                containerSelector: 'h1',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'simkl.com/tv',
            },
            icon: {
                containerSelector: 'td.SimklTVDetailPoster div:nth-of-type(1)',
                wrapLinkWithContainer: '<div style="position: absolute; top: 5px; left: 5px; width: 50px; z-index: 1;"></div>',
                locator: 'prepend',
                imgStyles: 'width: 40px;'
            }
        },
        // simkl tv calendar
        {
            id: 'simkl',
            //deferMs: 1000,
            defaultSite: 'sonarr',
            search: {
                containerSelector: 'table.SimklTVCalendarDayList > tbody > tr > td > div > div.SimklTVCalendarDayListLink:nth-of-type(1) > a',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'simkl.com/tv/calendar',
            },
            icon: {
                containerSelector: 'table.SimklTVCalendarDayList > tbody > tr > td > div > div.SimklTVCalendarDayListLink:nth-of-type(1)',
                wrapLinkWithContainer: '<section style="float: left; margin: 5px 10px 0 0"></section>',
                locator: 'prepend',
                imgStyles: 'width: 12px;'
            }
        },
        // simkl movies
        {
            id: 'simkl',
            deferMs: 1000,
            defaultSite: 'radarr',
            search: {
                containerSelector: 'h1',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'simkl.com/movie'
            },
            icon: {
                containerSelector: 'td.SimklTVDetailPoster div:nth-of-type(1)',
                wrapLinkWithContainer: '<div style="position: absolute; top: 5px; left: 5px; width: 50px; z-index: 1;"></div>',
                locator: 'prepend',
                imgStyles: 'width: 40px;'
            }
        },
        // iptorrent tv
        {
            id: 'iptorrents',
            defaultSite: 'sonarr',
            search: {
                containerSelector: 'b.MovieTitle > a',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'iptorrents.com/tv'
            },
            icon: {
                containerSelector: 'b.MovieTitle',
                wrapLinkWithContainer: '<div></div>',
                locator: 'append',
                imgStyles: 'width: 20px; margin: 5px 0 0 0;'
            }
        },
        // iptorrent movies
        {
            id: 'iptorrents',
            defaultSite: 'radarr',
            search: {
                containerSelector: 'b.MovieTitle > a',
                selectorType: 'href',
                modifiers: [
                    {
                        type: 'regex-match',
                        pattern: /(?<search>tt\d{5,10})/i
                    }, {
                        type: 'prepend',
                        var: 'imdb:'
                    }
                ]
            },
            match: {
                term: 'iptorrents.com/movies'
            },
            icon: {
                containerSelector: 'b.MovieTitle',
                wrapLinkWithContainer: '<div></div>',
                locator: 'append',
                imgStyles: 'width: 20px; margin: 5px 0 0 0;'
            }
        },
        {
            id: 'lastfm',
            defaultSite: 'lidarr',
            search: {
                containerSelector: '.header-new-title',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'last.fm/music'
            },
            icon: {
                containerSelector: '.header-new-title',
                locator: 'prepend',
                imgStyles: 'width: 35px; margin: 0 10px 6px 0;'
            }
        },
        {
            id: 'lastfm',
            defaultSite: 'lidarr',
            search: {
                containerSelector: '.header-new-crumb > span',
                selectorType: 'text',
                modifiers: []
            },
            match: {
                term: 'last.fm/music'
            },
            icon: {
                containerSelector: '.header-new-crumb > span',
                locator: 'prepend',
                imgStyles: 'width: 25px; margin: 0 10px 6px 0;'
            }
        },
        // allocine sonarr
        {
            id: 'allocine',
            defaultSite: 'sonarr',
            search: {
                containerSelector: 'meta[property="og:title"]',
                selectorType: 'content',
                modifiers: []
            },
            where: [
                {
                    selector: 'meta[property="og:type"]',
                    attribute: 'content',
                    operator: 'eq',
                    value: 'video.tv_show'
                }
            ],
            match: {
                term: 'allocine.fr/series'
            },
            icon: {
                containerSelector: '.titlebar-page .titlebar-title',
                locator: 'prepend',
                imgStyles: 'width: 32px; margin: -8px 10px 0 0;'
            }
        },
        // allocine radarr
        {
            id: 'allocine',
            defaultSite: 'radarr',
            search: {
                containerSelector: 'meta[property="og:title"]',
                selectorType: 'content',
                modifiers: []
            },
            where: [
                {
                    selector: 'meta[property="og:type"]',
                    attribute: 'content',
                    operator: 'eq',
                    value: 'video.movie'
                }
            ],
            match: {
                term: 'allocine.fr/film'
            },
            icon: {
                containerSelector: '.titlebar-page .titlebar-title',
                locator: 'prepend',
                imgStyles: 'width: 32px; margin: -2px 10px 0 0;'
            }
        },
        // senscritique sonarr
        {
            id: 'senscritique',
            defaultSite: 'sonarr',
            search: {
                containerSelector: 'h1',
                selectorType: 'title',
                modifiers: []
            },
            match: {
                term: 'senscritique.com/serie'
            },
            icon: {
                containerSelector: 'h1',
                locator: 'prepend',
                imgStyles: 'width: 30px; margin: 7px 0 0 0;'
            }
        },
        // senscritique radarr
        {
            id: 'senscritique',
            defaultSite: 'radarr',
            search: {
                containerSelector: 'h1',
                selectorType: 'title',
                modifiers: []
            },
            match: {
                term: 'senscritique.com/film'
            },
            icon: {
                containerSelector: 'h1',
                locator: 'prepend',
                imgStyles: 'width: 30px; margin: 7px 0 0 0;'
            }
        },
	// myanimelist sonarr
        {
            id: 'myanimelist',
            defaultSite: 'sonarr',
            search: {
                containerSelector: 'meta[property="og:title"]',
                selectorType: 'content',
                modifiers: []
            },
            where: [
                {
                    selector: 'meta[property="og:type"]',
                    attribute: 'content',
                    operator: 'eq',
                    value: 'video.tv_show'
                }
            ],
            match: {
                term: 'myanimelist.net/anime'
            },
            icon: {
                containerSelector: 'h1',
                locator: 'prepend',
                imgStyles: 'width: 16px; margin-right: 5px;'
            }
        },
        // myanimelist radarr
        {
            id: 'myanimelist',
            defaultSite: 'radarr',
            search: {
                containerSelector: 'meta[property="og:title"]',
                selectorType: 'content',
                modifiers: []
            },
            where: [
                {
                    selector: 'meta[property="og:type"]',
                    attribute: 'content',
                    operator: 'eq',
                    value: 'video.movie'
                }
            ],
            match: {
                term: 'myanimelist.net/anime'
            },
            icon: {
                containerSelector: 'h1',
                locator: 'prepend',
                imgStyles: 'width: 16px; margin-right: 5px;'
            }
        }
        // {
        //     id: 'nextepisode',
        //     defaultSite: 'radarr',
        //     search: {
        //         containerSelector: 'a[href*="moviedb.org"]',
        //         selectorType: 'href',
        //         modifiers: [
        //             {
        //                 type: 'regex-match',
        //                 pattern: /\/(?<search>\d{4,10})/i
        //             }, {
        //                 type: 'prepend',
        //                 var: 'tmdb:'
        //             }
        //         ]
        //     },
        //     match: {
        //         term: 'next-episode.net/movies'
        //     },
        //     icon: {
        //         containerSelector: 'div[id^="title_"]',
        //         locator: 'prepend',
        //         imgStyles: 'width: 25px; margin: 0px 10px -5px 0;'
        //     }
        // },
        // {
        //     id: 'nextepisode',
        //     rules: [
        //         {
        //             siteId: 'sonarr',
        //             match: {
        //                 pattern: /TVSeries/i,
        //                 operator: 'eq'
        //             }
        //         }
        //     ],
        //     search: {
        //         containerSelector: 'a[href*="imdb.com"]',
        //         selectorType: 'href',
        //         modifiers: [
        //             {
        //                 type: 'regex-match',
        //                 pattern: /(?<search>tt\d{5,10})/i
        //             }, {
        //                 type: 'prepend',
        //                 var: 'imdb:'
        //             }
        //         ]
        //     },
        //     match: {
        //         term: 'next-episode.net',
        //         containerSelector: 'body',
        //         selectorType: 'itemType'
        //     },
        //     icon: {
        //         containerSelector: '#show_name > h1',
        //         locator: 'prepend',
        //         imgStyles: 'width: 25px; margin: 0px 10px -5px 0;'
        //     }
        // }
    ],
    base64Icons_40px = [
        {
            id: 'sonarr',
            base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAACc1BMVEUAAAA1osQsiKUaGxysrK0VOkcXNkDx8fHx8fFKTEyHiIjx8fHIyckEAwQbT2ALGyBLTE1MTk7k5OSdnp8bO0U1vuppamsOERLx8fEmZnu/v8D09PQbXnT49/cv//86PD0MDg+EhIUPKzTx8fHs7Ozx8fEys9wNGh8rLS6R//8aRlQGCAnU1NTx8fEnKSqcnZ0kcosUFhf19fXt7e0dXXJ2d3hbXF3x8fFkZWY3y/sfISEvTlgTEA9kZWWvsLDx8fHx8fETExSzs7MRDQ0YFxccHyENDxDx8fEQMj3///8hNz4bW28TFxmTlJQlJifx8fEePkgZGxxCREQMDAylpaUFBwgeT17x8fFBQkPKysoyboJzdHRWV1gmeJN/gID39/cfQUwolLcebIYiQUvx8fE2xvQlYXXY2Ni3uLhmZ2dXWFhiY2Px8fHx8fEUISW9vb4VFxgAAAAWGx0cVmnx8fEJBgbx8fEhO0Pa2tozNDXx8fHx8fFC//8HBwgcKi/x8fEztuAbPEf8+/vExMXx8fEZJCgtLzA3yPdRU1MPPEseU2QkWWsidpH5+fkbPUgdICJSVFQrLC04zf0YNT6Xl5geQ1D9/f0jXnIifZojRVAiIyQhVGWOjo8maX8VJSv8/PwdZXwfPkhFR0gxMzQVHSDx8fEodIwtmr0pYnW8vLwhV2haW1xnaGmDhIQjUF/x8fEWGBmio6Px8fE3w+95enofISEWGhzx8fEoZ3xPUFAjJCUqepQVPUojRlIgTl3x8fEbN0GnqKgUOEQbLDIgbocyuOQpan4gY3kNDxAhQUwRLTZQUlJHSEk4yPZXWFl3eHiXmJg/zZ3SAAAA0XRSTlMAD/+G/68Aiz2N/9MA/////wD/AP////8T//9pAP8C/wAA//UArP//AAj////k////m1L//////wD/AAD/hQAkDP///////53/AP//qv+XdwD/////AP/JAP8A/wD//1z///+37P//AP+e///bLP8A/wi5/7X/AP///4OTCP//HP+fY/9E/43//wD//////62T/////wBQ//////////9ZAKr/AP+5//////8AAP//o/8AMf///55J/wAA/wAA/3z//wD/////AAD//wD//wD//z8EYasAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAOiSURBVHicdZX7UxtVFMdvbZRKHKvpyoVRxHZoahsoKMMsq1E4JDd9pKMup8XGsVPEDB1DxKiQweDCWBiTkm7bUJQWpq0vbJk6UlmitVXqODLig8Kf5N3d7JKQeO4kP9z97Nnzut9LLIvr1jaW6HeGuUVny36qNLbIJtP33i2LinkWHVooJvnGyFBY3GzzrYXkmys3ycl6sYSFnyT3yXGLe/aNX8nDLrGkNb3z/u9/ruTAOy/uPaKkSpOLygdbHnrG5E61kC97ZCxJLiKbepsc/8HI4z3yKQhBSh9zqZswtRkCUwI8R3bGjXyvjWbwYA/FmtECUh1MAa3aBdhwupbnzutSr4Y+wss9DKebR0WVw6r+X1eeQVYl+NikGm41wCH+JJRRLn7Yhwp0lDtCdYOh9vKIjMrBoKDAJH/zgA626nXmJN5eFiBGEdh0lgHgLd+SNuVjDXo44QUOJsyA1jF7ffk3BM4CjQUYwj7tBFMWzbCH4qTNmYv9K883bz0h+AC86EVAOJc8C0qNq9rseyXZZuV4FCD7wF8AV2caG8eHwT98RZax3KrDGHnVblYGKSLOuCe4udMKKOCZrrPABJm369ZL5VuQXl3VkpomJdPgj8G/9sNZ8rpd30kPQJ97NalJ+nJvjyFU2B2IEntW1aMUvOkJ7k/3qEk3kCl2iGKYbEzrnAzwrWQ6TErSXZ+MDaVAdQ4odusedVKb6PZ6aD648el2YN4ZKamZS0oDK/DotEGejLfPbXxYk6TlYYwpa3nJ7LbBZgTZ22nmLGkzPplCKq889+yCd4BunW6J2/I48GbK++2pT9gtFEMyReEq4p5HG/8Y3wMDS/vAA46NFlpDoa5RWNKCfgZ+fTFo1JYAIlaIbdaYiYNsgM8VnxoKaK672veKv910WWYNrihG8LB2iYcFBkUBWOCEdhg7jDkzBlc/CvxcAly5LQNitibV2xupyfBBYp1VFCJNYu4oxCu5mDQjrRIQ5YhjkB8sfrRccxX7Fd/fNwKBVJMYHjHA+PNNayAHzwH0hqrtCqtqXQXzCUGGEddJQ6r47yWk/Lz518VCBVAdGaVrXFYuEFPS4v8c+rGnC7OOzUIhqlwZuoLnSUtO+o6defoTLzjEYlPnGDz48S85kSJff/EZ2VrszyRfIa89tdMSyGN3fn7889JCeo3cfCFfmnd8V1tZLM3h+ZHalx8pFvvWhDMfi5Yt/N+1EG/bdq/fWc+vD2d/Yqzw+vgP21jRElbnue0AAAAASUVORK5CYII='
        }, {
            id: 'radarr',
            base64: 'data:image/png;base64,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',
        }, {
            id: 'lidarr',
            base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNi0xOVQxODoyMTo1OSswMDowMGZHAy8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDYtMTlUMTg6MjE6NTkrMDA6MDAXGruTAAALPklEQVR4nK1ZC3CU1RX+dpNsNpvNwzx4SEIeQJCndlXCU1raiAzYWh1EtDycQUW0osWCykTA+CgKLVJRW2fKQyso7UArGh4zWAvSAiWDCYIEUGJAIAnknewju9vz3f3/zf/vbsDp9Owc2P0f53z33HvPOd9NPK4h58+fj3XZKjpCdIJosWiRaLYFSIbFgmAw2C6/G0SrRf8tuk+0SjQQaahfv35X9X9VgDHA9RadIXqf6I2iDuPNQDAIt98LR1wigggWyKVbRR8Q7RD9QvQD0S2il4w+rgayR4AR4FJFnxB9TLSP8YZVImaVjz0+AZ+cJ4Ygpva7CZ1dPglXQIHWBjJG02dE3xR9XbTlWiCjAMaI2u2ia0SHGEElWOXVOCta/W7UeZpwpbEFrxz7O37UewiyktKQaneglz0VKXF2WPwBeANdOlgO8AXRmaJPiu42+o0EagIYA9xS0TJRiw4sUSJ1xd+JfbWV2F3xOSoqKvDd8TNo6+9EMM2GyjPlWPttM5x9M9F3UD5udrlwu2scJuQMRUZ8EjyMbAgoB7xTtFT0JSMGI8ieppiA3hJ9RL+QGJcg8+HBnyr3Yv3W93F61wGgpokzCiSJmcwbgFN1EAQInriIVureL1Ft+Rib89IxcPIYPDj9AcwcPlHWSyI8fp/u50XRXNFHEbIWO4IR0QuDs8gnMSEB+xtOoXT9GlRu/Aio6zRb+fFg2QIXgJREmfYID3R5tgmn/1COpdv+gQ/m3ImyuQsxPrsIHp+PmwmGQMyPjGJ8DHBLjeASEuLxxy/3YNny5fB+Vh0d6/7XAQmC6pvLgCsH6enp8Nub0OruiH5WBlb52oeYfugoVoi9ecN+Ap+vywiyFtp06yDjI8BxQ5QZwa0+vB2/+dVzwMmGKH8jRoxAzegMtGw7HLrg9WL5iuX4ob0Qp2u+xsGDB1FeXo5jx46Z3uNAn53/BJp++zKevvUuI0j6prHwxjGuQaaSNdA2BKeVkYsFbsiQIVi6+Fl0jszGI0tkIzZo0ZLFn5aWjoLr85FT0B+TJk3C448/jj179mD16tU4ceJEtxGxuVJsp7/txMPDSuD2eaH5JobR0FKQEeBCaKmEG2J/fbWa1khws2fPxrLnl8GemYqStxYhsPek6X4gEEBXV5e+CWCz2XD33Xdj4sSJKCsrw6ZNm0wg6WPoW3kYlzFIf4cYmHNfNAJkhVjAL0wl3K2lG16PWnOLFi3CkiVLYLcmYOUXH+H4xh0xipdZCLizsxMpKSlYtWoVsrOzVTR1oY/S9a9j+6LVSLLE6SmIBeEd0Us6QJYuVSGY55hK1G6NiBzBWeX9420X8OaWDRKBK2Y0YpxzZIkB1O/3s0YrG/X19aZI0tfmyT/FoyMnozM01cTCkrqWAK3aDxU9JuH1W/9sSiVcc6WlpcoBIfzu0HY0/uXzaBRWC/zBgKoyjAO/R0q8uCtbtgJH/1OByuPa5qkL+Zwx7DYkW+L1KDJobxAguxIWftjE8E6pEKd3/ctklFObmZmJgCThzxqrsXWjDKDB0/3A8L4qxUAS8ktHt+GTsxWqHuc5sxCIk3haumPKISbZk3DHL2eh8uWXZVASn4utOL3zAPbNO447c136WiSmEQTIlkl1JUGprSxfqkLovocPR0lJCbweL3wWP17d8z4Ce74M3UyU1+9zAaP6S4K2MGQ423xR8vJ5bKs9hASfOP/nGaDdEwJiDLZE2zK4N4I3SULeIJmlpln5vjP/FrGjHiGmCQRYrE8vCz9rq7HgTJkyRS1w+Px475sDOLhxm6xs7SbBjc2X3126UTHEUhIqJz67gHbI9799hZhyQ7Zat2hoUz/pu/VnbtgtVn2aiwmwSNmVT527Cd+dOmuyUVxcDIs8e87bjDV/3SBWLoRujOgbihzBRVVQTQJyY3yhtKryzrEL5ns2KxwTboBny+Hw2Oi7zt2CfFuGJAd1tYgAe+khb+hoQXt9Y9iG0+lEbm6uQLdgXWU5zm3e2+3AlatNK3oWAuczN+dGAbSMH4Cnp83Cui1VuAy3ukbfxFBoz9TtZhOgWn8sbR1eNwIdbhPAdGcKjrTUYMN7khbOhaaCuxW9nKEIXUv4DJ/lO/rzzjjcMXs6Zgwaj3eS7UCr9qj4JgZLd6JKvmrLz8e65J/XPvsQ7o8q8P8S+zQXfj3xXsR39Lw6dCFAEhy1/R02O6wOe7g4eNvd+ODUfuzctBVoM8wlI1En0RyQeW00jByf1aOX48TcWbNxc2oevqqrRltbW/ej4psYgt2w2wmwXrQgIAayHKlIzr5OIv6dutska2PVjncR3H8m2nFFbWiTWNBzGHhPUg+O1IYv5cychMdGTpEgBFFbW2sCSN/EEOheOvUEyII7igSHHOJ6adNP7g3lOf+oXHTsk2bAG6Pgcmfu/1p2aUEIRCxwNjF/4Gz3BnH1xZP3zEU/WxqCcp/tmFHomxhYvzWpJkA+9QvmHRIcl3CIk/gYyEoGfpAjRcACW362cVQhoZEOSTHuIHwJ8t0v36XYSxMZTtoK3BZt7dokZc35OWbkF8t4/fC0dqhe0Tgg+iYGjz9cpQ4SIEk1GzoHhH2R4GzOS5PyI0tz61EEBcjC557D1KlT0enuNO4wlWStAqSmvUEo51FUNH6Ls1/LcvhWKlHFuVCUNbGWDMPikvuRFEyAVSrQjo93mBtZKZP0TQyaENM+AiTjJ6Ed4xNqSPY18I6xikOgJpQTd/7+XTx2+71ISe+DLkYqQlwZ+ZiRNxpbzh/CQ6tnyZTWmx/ISsT0OQ/gtswiSW9BNF6+bGq5KCRV9E0MmhBTFQESMhn/GE4zqSHZFwmO3tGw6yhdsUz1c3RgWCNKfHKVcY2TEhUrN153zzg8NequUCsmS4aNq6m77hXymRGXpLdbFJ5ABOINP8j4+5C3khqSfZHg6ML+jc0m+zk6YX9nlKCmxs5FyeAMLJg5F0OdfeEO+LBy5UpzVy0yUnzRJ31rclELWrij5lnJOtEyRpG8tezBhYp9GbtqTgubTfaGbL88Hk9UNE0iAR06ZxoW3DgF9ZevYMULK6LA2SYWKV+KKwfDANdpmEycZK3o/aJD2I+NzypS1JDsy8hL6ODw4cOqR2Qbxk6HINmIWiNbqkmD8dTkmfh0ezleevUV87Sq6GYpH/Tl7p7aExoWRAIki+JZCfe+1SMvkLc2CzWMZHZ0NG/ePNUrsh1jxzMwrxDN0g2FpzjLAWdBH6yduxhVVVXR0RVwz4ht+iCB1ySgYWgJAyQ5NnBj8tHnRV/keiJfXSS8Ne3tFGFfy6JIFNOEnipS7A7EjS0kjQvdnDAALbsrUVXTiEjhtMYg7tB879Z/KOKufzGAJLOX/h3z+aJPRvewGCI17PHoQ0SdJDReCbVJBVKjfYFwmgqL7FZuCK45TitnybDn34bhEMl09BED5ALt//k0wPUxLmOgooZkX1GHR7pwguxisjAD2KV10ZzxGIdHhjWng9N9fq/TLbrlaZOUA3WWZ+XGIW8lNST72v/Qcew6oh2/SSfcfuEyAn1SVIdjafbCectAXD90gCpf4eO3uNDxm2G3ckjPGyMXKSaAEVGE9iLPStQBJlMQEymp4bQcF6bl3aI4BNv0Fk8HdtQcwaeXTmCl6z5kOFPRKzF0gMnyxQrRaY4ad2v4ADNW9GJGUH8gYuPwrCR8BEygihrKeiPBIYdIcvSWdr0Zo7MHYayomweVkn4MhV8XJmHmOaaS8G793kfAxhcMIGmIZyU8jpih6U2iDoIlwWmTTXFrZqE6FmnzuSPN9XiIfjVwVwUYAyQ0wxz5G4j4M4Ts+GxHfGIy1OmD6tLZMTAvsZ37n/8M8V+0YP4B2krMFgAAAABJRU5ErkJggg=='
        }
    ];

/**
 * Attempts to find a jQuery element using the supplied selector every n milliseconds 
 * (defined by waitForMs param) until found or the max number of attempts is reached.
 * Wait interval and max attempts are defined in settings.
 * @param {string} selector - jQuery selector
 * @param {function} callback - callback function
 * @param {int} maxAttempts - max attempts
 * @param {int} waitForMs - time in ms to wait between attempts
 * @param {int} count - attempt iterator
 */
var waitForEl = function(selector, callback, maxAttempts, waitForMs, count) {
    if (!count || count === 0) {
        log('waiting for search input element to be available...');
    }    

    if ($(selector).length) {
        if (!count || count === 0) {
            log('found search input without any retry attempts');
        } else {
            log(`took ${count * waitForMs} ms for the search input to be found`);
        }

        callback();
    } else {     
        setTimeout(function() {
            if (!count) {
                count = 0;
            }

            count++;
            
            if (count < maxAttempts) {
                waitForEl(selector, callback, maxAttempts, waitForMs, count);
            } else {
                log('Failed to find the input search element. Try refreshing the page or increasing the wait time in the debug settings. If neither of these work the jQuery selectors for the search input element may be incorrect.', 'error');

                return;
            }
        }, waitForMs);
    }
};

/**
 * gets a value from an element based on the supplied selector
 * @param {any} el - jQuery element
 * @param {string} selector - selector type
 * @returns {string}
 */
var getElementValue = function(el, selector) {
    switch (selector) {
        case 'text':
            return el.text();
            
        default: // attribute
            return el.attr(selector);
    }
};

/**
 * Convert string to title case
 * @param {string} s - string to convert
 * @returns {string} - converted string
 */
var title = (s) => s.replace(/(^|\s)\S/g, (t) => t.toUpperCase());

/**
 * Get HTML markup for a custom icon to inject into the body.
 * @param {InjectedIconConfig} injectedIconConfig - injected icon config
 * @param {string} iconDataUri - icon data uri
 * @param {string} siteId - id of the servarr site; sonarr, radarr, lidarr, etc.
 * @returns {string} - HTML to inject
 */
 function getCustomIconMarkup(injectedIconConfig, siteId, linkHref) {
return `<style id="servarr-ext_custom-icon-style">
.servarr-ext_icon a {
  position: absolute;
  background-color: ${injectedIconConfig.backgroundColor};
  text-decoration: none;
  height: 52px;
  z-index: 9999999;
  ${injectedIconConfig.position}: ${injectedIconConfig.positionOffset};
}

.servarr-ext_anchored-icon a {
  padding: 0 15px;
  width: 60px;
}

.servarr-ext_floating-icon a {
  width: 52px;
  ${injectedIconConfig.side}: ${injectedIconConfig.sideOffset};
  border-radius: 50px;
}

.servarr-ext_anchored-left-icon a {
  left: 0;
  border-radius: 0 50px 50px 0;
}

.servarr-ext_anchored-right-icon a {
  right: 0;
  border-radius: 50px 0 0 50px;
}

.servarr-ext_anchored-left-icon .servarr-ext_anchor-label {
  margin-top: 8px;
}

.servarr-ext_anchored-right-icon .servarr-ext_anchor-label {
  margin: 8px 0 0 50px;
}

.servarr-ext_icon-image {
  width: 40px;
  height: 40px;
  background: url('${base64Icons_40px.find(i => i.id == siteId).base64}') no-repeat;
}

.servarr-ext_anchored-icon .servarr-ext_icon-image {
  top: 6px;
}

.servarr-ext_floating-icon .servarr-ext_icon-image {
  margin: ${(siteId == 'radarr' ? '6px 0px 0px 8px' : '6px 0px 0px 6px')};
}

.servarr-ext_anchored-left-icon .servarr-ext_icon-image {
  float: right;
  margin: ${(siteId == 'radarr' ? '6px -10px 0 0' : '6px -10px 0 0')};
}

.servarr-ext_anchored-right-icon .servarr-ext_icon-image {
  float: left;
  margin: ${(siteId == 'radarr' ? '6px 0px 0px -5px' : '6px 0px 0px -9px')};
}
</style>
<div id="servarr-ext_custom-icon-wrapper" class="servarr-ext_icon servarr-ext_${injectedIconConfig.type}-icon ${(injectedIconConfig.type == 'anchored' ? ('servarr-ext_anchored-' + injectedIconConfig.side + '-icon') : '')}">
    <a href="${linkHref}" target="_blank" data-servarr-icon="true">
        <div class="servarr-ext_icon-image"></div>
        <!-- ${(injectedIconConfig.type == 'anchored' ? ('<div class="servarr-ext_anchor-label">Search<br />' + title(siteId) + '</div>') : '')} -->
    </a>
</div>`;
}

async function init() {
	const settings = await getSettings();

    if (!settings.config.enabled) {
        return;
    }

    log(['settings.sites: ', settings.sites]);

    $.each(settings.sites,
        function (i, site) {
            if (window.location.href.includes(site.domain)) {
                log(['servarr site match found: ', site]);

                if (window.location.href.indexOf(site.searchPath) === -1) {
                    return;
                }
            
                let search = window.location.href.replace(/(.+\/)/g, '');
                let sdef = site.searchPath.replace(/(\/)/g, '');

                search = search.replace(sdef, '');

                if (search.trim() !== '') {
                    waitForEl(site.searchInputSelector, function() {
                        // use jquery selector and then retrieve the DOM element
                        let searchInput = $(site.searchInputSelector)[0];
                    
                        if (searchInput) {
                            // jquery can't be used to trigger the input event here so rely on vanilla js for event triggering
                            searchInput.value = decodeURIComponent(search.trim());
    
                            let event = document.createEvent('Event');
                            event.initEvent('input', true, true);
    
                            searchInput.dispatchEvent(event);
                        }
                    }, settings.config.searchInputMaxAttempts, settings.config.searchInputWaitForMs);
                }
            }
        });
        
    log(['integrations: ', integrations]);

    /* iterate all integrations that are enabled in the settings */
    $.each(settings.integrations.filter(integration => { return integration.enabled; }), 
        function (i, settingsIntegration) {
            /* iterate all integrations that match the current setting integration */
            $.each(integrations.filter(_i => { return _i.id == settingsIntegration.id; }),
                function (ii, integration) {
                    /* test the integration should be used by matching against the url */
                    if (window.location.href.includes(integration.match.term)) {
                        log(['integration matched to domain: ', integration]);

                        var matchContainer = $(integration.match.containerSelector),
                            site = null;

                        if (integration.hasOwnProperty('defaultSite')) {
                            site = settings.sites
                                .filter(s => { return s.enabled; })
                                .find(s => s.id == integration.defaultSite);
                        } else {
                            log('iterating rules');

                            $.each(integration.rules, 
                                function (ir, r) {
                                    var matchValue = getElementValue(matchContainer, integration.match.attribute);

                                    var isMatch = r.match.pattern.test(matchValue);

                                    var hasMatch = r.match.operator === 'eq' ? isMatch : !isMatch; // 'ne', convert to switch if other values are required

                                    log('matchContainer', matchContainer, 'integration.match.attribute', integration.match.attribute, 'matchValue', matchValue, 'isMatch', isMatch, 'hasMatch', hasMatch);

                                    if (hasMatch) {
                                        site = settings.sites
                                            .filter(s => { return s.enabled; })
                                            .find(s => s.id == r.siteId);

                                        return false;
                                    }
                                });
                        }

                        if (site == null) {
                            return;
                        }

                        // if the site integration has a where property, then the rules within the where must be evaluated
                        // and asserted to be correct before the integration is used
                        if (integration.hasOwnProperty('where')) {
                            $.each(integration.where, function(i, rule) {
                                switch (rule.operator){
                                    case 'eq':
                                        if (rule.value !== getElementValue($(rule.selector), rule.attribute)) {
                                            site = null;
                                        }                                        

                                        break;  
                                }
                            });

                            if (site == null) {
                                return;
                            }
                        }

                        log(['integration matched to site: ', integration, site], $(integration.search.containerSelector));

                        // This is a bit janky, but some sites (looking at you trakt) load quite slowly and need the processing to be deferred otherwise the
                        // containers aren't available. Integrations can therefore have a deferMs setting which will be used here to delay execution. 
                        // In the case of trakt, page refreshes and tab activations work fine, but page to page navigations don't   ¯\_(ツ)_/¯
                        let deferMs = integration.hasOwnProperty('deferMs') ? integration.deferMs : 0;

                        setTimeout(() => { 
                            /* iterate all the containers */
                            $.each($(integration.search.containerSelector), function(i_el, container) {
                                let containerEl = $(container);

                                // Check if the container is a servarr icon. For example, on musicbrainz the container is an anchor in an h1, and the icon 
                                // will be an anchor inserted prior to container. In subsequent lookups, the container selector will pick up both the relevant 
                                // container and the icon. Icons have a data-servarr-icon attribute added so they can be skipped in this scenario.
                                if (containerEl.attr('data-servarr-icon')) {
                                    log(`element '${container}' picked up an existing icon, so skipping`);
                                    
                                    return;
                                }

                                // Check if the container has already been processed and had an icon added.
                                if (containerEl.attr('data-servarr-ext-completed')) {
                                    log(`element '${container}' already has an icon attributed, so skipping`);
                                    
                                    return;
                                }

                                var searchTerm = getElementValue(containerEl, integration.search.selectorType);
                                
                                if (integration.search.modifiers.length == 0){
                                    searchTerm = searchTerm.trim();
                                } else {
                                    $.each(integration.search.modifiers, function(i, modifier) {
                                        switch (modifier.type) {
                                            case 'replace':
                                                searchTerm = searchTerm.toLowerCase().replace(modifier.from, modifier.to).trim();
                                                break;

                                            case 'regex-match':
                                                // in a try catch in case there's mutiple integration configs matched and the match fails
                                                try {
                                                    searchTerm = searchTerm.match(modifier.pattern).groups.search;
                                                }
                                                catch(e){
                                                    return;
                                                }
                                                break;

                                            case 'prepend':
                                                searchTerm = modifier.var + searchTerm;
                                                break;
                                        }
                                    });
                                }

                                searchTerm = searchTerm.replace(/\s\s+/g, ' ');

                                log(['search term: ', searchTerm]);

                                let searchUrl = site.domain.replace(/\/$/, '') + site.searchPath + encodeURIComponent(searchTerm).replace(/\./g, ' ');

                                log(['search url: ', searchUrl]);

                                // Either add an icon to it's configured container or add a custom icon to the page
                                if (!settings.config.customIconPosition || $(integration.icon.containerSelector).length > 1) {
                                    // add an icon to the configured container
                                    let icon = base64Icons.find(i => i.id == site.id),
                                        linkEl = $(`<a href="${searchUrl}" target="_blank" tooltip="${site.menuText}" title="${site.menuText}" data-servarr-icon="true"></a>`)
                                            .append($(`<img src="${icon.base64}" style="${integration.icon.imgStyles}">`));

                                    let el = integration.icon.hasOwnProperty('wrapLinkWithContainer') ? $(integration.icon.wrapLinkWithContainer).append(linkEl) : linkEl;

                                    if (integration.icon.locator == "append") {
                                        $(integration.icon.containerSelector).eq(i_el).append(el);
                                    } else {
                                        $(integration.icon.containerSelector).eq(i_el).prepend(el);
                                    }
                                } else {
                                    // show a custom icon based on the icon config
                                    let el = getCustomIconMarkup(settings.injectedIconConfig, site.id, searchUrl);

                                    $('body').prepend(el);
                                }

                                containerEl.attr('data-servarr-ext-completed', true);
                            });
                        }, deferMs);
                    }
                });            
        });
}

init();

// (() => {
//     if (window.hasRun === true)
//     {
//         console.log('window has run');

//         return;
//     }

//     console.log('window has not run');

//     window.hasRun = true;

//     init();
// })();
