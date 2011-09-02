(function() {

    
	jQuery.noConflict();

	var mock = {
		data: {
			contacts: [{"Id":"003A0000002kPqkIAE","Department":"Finance","Email":"agreen@uog.com","FirstName":"Avi","LastName":"Green","Name":"Avi Green","Phone":"(212) 842-5500","Title":"CFO"},{"Id":"003A0000002kPqlIAE","FirstName":"Siddartha","LastName":"Nedaerk","Name":"Siddartha Nedaerk"},{"Id":"003A0000002kPqmIAE","FirstName":"Jake","LastName":"Llorrac","Name":"Jake Llorrac"},{"Id":"003A0000002kPqTIAU","Department":"Procurement","Email":"rose@edge.com","FirstName":"Rose","LastName":"Gonzalez","Name":"Rose Gonzalez","Phone":"(512) 757-6000","Title":"SVP, Procurement"},{"Id":"003A0000002kPqUIAU","Department":"Finance","Email":"sean@edge.com","FirstName":"Sean","LastName":"Forbes","Name":"Sean Forbes","Phone":"(512) 757-6000","Title":"CFO"},{"Id":"003A0000002kPqVIAU","Email":"jrogers@burlington.com","FirstName":"Jack","LastName":"Rogers","Name":"Jack Rogers","Phone":"(336) 222-7000","Title":"VP, Facilities"},{"Id":"003A0000002kPqWIAU","Department":"Finance","Email":"pat@pyramid.net","FirstName":"Pat","LastName":"Stumuller","Name":"Pat Stumuller","Phone":"(014) 427-4427","Title":"SVP, Administration and Finance"},{"Id":"003A0000002kPqXIAU","Department":"Internal Operations","Email":"a_young@dickenson.com","FirstName":"Andy","LastName":"Young","Name":"Andy Young","Phone":"(785) 241-6200","Title":"SVP, Operations"},{"Id":"003A0000002kPqYIAU","Department":"Finance","Email":"barr_tim@grandhotels.com","FirstName":"Tim","LastName":"Barr","Name":"Tim Barr","Phone":"(312) 596-1000","Title":"SVP, Administration and Finance"},{"Id":"003A0000002kPqZIAU","Department":"Facilities","Email":"bond_john@grandhotels.com","FirstName":"John","LastName":"Bond","Name":"John Bond","Phone":"(312) 596-1000","Title":"VP, Facilities"},{"Id":"003A0000002kPqaIAE","Department":"Production","Email":"spavlova@uog.com","FirstName":"Stella","LastName":"Pavlova","Name":"Stella Pavlova","Phone":"(212) 842-5500","Title":"SVP, Production"},{"Id":"003A0000002kPqbIAE","Department":"Technology","Email":"lboyle@uog.com","FirstName":"Lauren","LastName":"Boyle","Name":"Lauren Boyle","Phone":"(212) 842-5500","Title":"SVP, Technology"},{"Id":"003A0000002kPqcIAE","Department":"Operations","Email":"b.levy@expressl&t.net","FirstName":"Babara","LastName":"Levy","Name":"Babara Levy","Phone":"(503) 421-7800","Title":"SVP, Operations"},{"Id":"003A0000002kPqdIAE","Department":"Warehouse Mgmt","Email":"j.davis@expressl&t.net","FirstName":"Josh","LastName":"Davis","Name":"Josh Davis","Phone":"(503) 421-7800","Title":"Director, Warehouse Mgmt"},{"Id":"003A0000002kPqeIAE","Department":"Administration","Email":"jane_gray@uoa.edu","FirstName":"Jane","LastName":"Grey","Name":"Jane Grey","Phone":"(520) 773-9050","Title":"Dean of Administration"},{"Id":"003A0000002kPqfIAE","Department":"Executive Team","Email":"asong@uog.com","FirstName":"Arthur","LastName":"Song","Name":"Arthur Song","Phone":"(212) 842-5500","Title":"CEO"},{"Id":"003A0000002kPqgIAE","Department":"Finance","Email":"ajames@uog.com","FirstName":"Ashley","LastName":"James","Name":"Ashley James","Phone":"+44 191 4956203","Title":"VP, Finance"},{"Id":"003A0000002kPqhIAE","Department":"Executive Team","Email":"tripley@uog.com","FirstName":"Tom","LastName":"Ripley","Name":"Tom Ripley","Phone":"(650) 450-8810","Title":"Regional General Manager"},{"Id":"003A0000002kPqiIAE","Department":"Production","Email":"ldcruz@uog.com","FirstName":"Liz","LastName":"D'Cruz","Name":"Liz D'Cruz","Phone":"(650) 450-8810","Title":"VP, Production"},{"Id":"003A0000002kPqjIAE","Department":"Technology","Email":"efrank@genepoint.com","FirstName":"Edna","LastName":"Frank","Name":"Edna Frank","Phone":"(650) 867-3450","Title":"VP, Technology"},{"Id":"003A000000qSFd3IAG","Email":"brian_pfeil@yahoo.com","LastName":"pfeilbr@060A0000000LtFw.na7.force.com","Name":"pfeilbr@060A0000000LtFw.na7.force.com"},{"Id":"003A000000juKHqIAM","Email":"tricia.pfeil@gmail.com","FirstName":"Tricia","LastName":"Pfeil","Name":"Tricia Pfeil"},{"Id":"003A000000juKIlIAM","Email":"wyatt.pfeil@gmail.com","FirstName":"Wyatt","LastName":"Pfeil","Name":"Wyatt Pfeil"},{"Id":"003A000000juKAXIA2","Department":"Cardiology","Email":"brian.pfeil@gmail.com","FirstName":"Brian","LastName":"Pfeil","Name":"Brian Pfeil","Phone":"1231231234","Title":"Chief"},{"Id":"003A000000juKf1IAE","FirstName":"Geoffrey","LastName":"Lurie","Name":"Geoffrey Lurie"}],
			accounts: [{"Id":"001A0000002wcrYIAQ","AccountNumber":"CC978213","AnnualRevenue":"30000000","Description":"Genomics company engaged in mapping and sequencing of the human genome and developing gene-based drugs","Fax":"(650) 867-9895","Industry":"Biotechnology","Name":"GenePoint","Phone":"(650) 867-3450","Type":"Customer - Channel","Website":"www.genepoint.com"},{"Id":"001A0000002wcrZIAQ","AccountNumber":"CD355119-A","Fax":"+44 191 4956620","Industry":"Energy","Name":"United Oil & Gas, UK","Phone":"+44 191 4956203","TickerSymbol":"UOS","Type":"Customer - Direct","Website":"http://www.uos.com"},{"Id":"001A0000002wcraIAA","AccountNumber":"CD355120-B","Fax":"(650) 450-8820","Industry":"Energy","Name":"United Oil & Gas, Singapore","Phone":"(650) 450-8810","TickerSymbol":"UOS","Type":"Customer - Direct","Website":"http://www.uos.com"},{"Id":"001A0000002wcrbIAA","AccountNumber":"CD451796","AnnualRevenue":"139000000","Description":"Edge, founded in 1998, is a start-up based in Austin, TX. The company designs and manufactures a device to convert music from one digital format to another. Edge sells its product through retailers and its own website.","Fax":"(512) 757-9000","Industry":"Electronics","Name":"Edge Communications","Phone":"(512) 757-6000","TickerSymbol":"EDGE","Type":"Customer - Direct","Website":"http://edgecomm.com"},{"Id":"001A0000002wcrcIAA","AccountNumber":"CD656092","AnnualRevenue":"350000000","Fax":"(336) 222-8000","Industry":"Apparel","Name":"Burlington Textiles Corp of America","Phone":"(336) 222-7000","TickerSymbol":"BTXT","Type":"Customer - Direct","Website":"www.burlington.com"},{"Id":"001A0000002wcrdIAA","AccountNumber":"CC213425","AnnualRevenue":"950000000","Fax":"(014) 427-4428","Industry":"Construction","Name":"Pyramid Construction Inc.","Phone":"(014) 427-4427","TickerSymbol":"PYR","Type":"Customer - Channel","Website":"www.pyramid.com"},{"Id":"001A0000002wcreIAA","AccountNumber":"CC634267","AnnualRevenue":"50000000","Fax":"(785) 241-6201","Industry":"Consulting","Name":"Dickenson plc","Phone":"(785) 241-6200","Type":"Customer - Channel","Website":"dickenson-consulting.com"},{"Id":"001A0000002wcrfIAA","AccountNumber":"CD439877","AnnualRevenue":"500000000","Description":"Chain of hotels and resorts across the US, UK, Eastern Europe, Japan, and SE Asia.","Fax":"(312) 596-1500","Industry":"Hospitality","Name":"Grand Hotels & Resorts Ltd","Phone":"(312) 596-1000","TickerSymbol":"GHTL","Type":"Customer - Direct","Website":"www.grandhotels.com"},{"Id":"001A0000002wcrgIAA","AccountNumber":"CC947211","AnnualRevenue":"950000000","Description":"Commerical logistics and transportation company.","Fax":"(503) 421-7801","Industry":"Transportation","Name":"Express Logistics and Transport","Phone":"(503) 421-7800","TickerSymbol":"EXLT","Type":"Customer - Channel","Website":"www.expressl&t.net"},{"Id":"001A0000002wcrhIAA","AccountNumber":"CD736025","Description":"Leading university in AZ offering undergraduate and graduate programs in arts and humanities, pure sciences, engineering, business, and medicine.","Fax":"(520) 773-9060","Industry":"Education","Name":"University of Arizona","Phone":"(520) 773-9050","Type":"Customer - Direct","Website":"www.universityofarizona.com"},{"Id":"001A0000002wcriIAA","AccountNumber":"CD355118","AnnualRevenue":"5600000000","Description":"World's third largest oil and gas company.","Fax":"(212) 842-5501","Industry":"Energy","Name":"United Oil & Gas Corp.","Phone":"(212) 842-5500","TickerSymbol":"UOS","Type":"Customer - Direct","Website":"http://www.uos.com"},{"Id":"001A0000002wcrjIAA","Fax":"(415) 901-7002","Name":"sForce","Phone":"(415) 901-7000","Website":"www.sforce.com"},{"Id":"001A000000e9jNtIAI","Name":"Northface","Website":"http://thenorthface.com"},{"Id":"001A000000e9jeuIAA","Name":"Pfeil Co.","Website":"http://thepfeils.com"},{"Id":"001A000000e9jgmIAA","Name":"Acme Co.","Website":"http://acme.com"}]
		}
	};
	
	var makeCompareFunctionFromSortDefs = function(sortDefs) {
	    // order of sort defs in array drives sort property priority
	    // e.g.
	    /*
	    sortDefs = [
	        {
	            "prop": "count",
	            "order": "desc"
	        },
	        {
	            "prop": "lastLaunched",
	            "order": "desc"
	        }
	    ];
	    */
	    var genericCompare = function(item1, item2, sortDefs) {
	        for (var i = 0; i < sortDefs.length; i++) {
	            var sortDef = sortDefs[i];
	            var propName = sortDef["prop"];
	            var propValue1 = item1[propName];
	            var propValue2 = item2[propName];
	
				propValue1 = (typeof(propValue1) == 'string') ? propValue1.toUpperCase() : propValue1;
				propValue2 = (typeof(propValue2) == 'string') ? propValue2.toUpperCase() : propValue2;
								
	            if (propValue1 < propValue2) {
	                return (sortDef["order"] === "asc") ? -1 : 1;
	            } else if (propValue1 > propValue2) {
	                return (sortDef["order"] === "asc") ? 1 : -1;
	            } else {
	                // equal at this point, so continue to the next property
	            }
	        }
	        // all properties are equal
	        return 0;
	    }
	

	    return function(item1, item2) {
	        return genericCompare(item1, item2, sortDefs);
	    };
	}
	
	
	jQuery(function($) {
		
		var app = {
			'debug': true,
			'remoteDebugURLs': ['http://mac01.home:8081/target/target-script-min.js#anonymous', 'http://mac01.merck.com:8081/target/target-script-min.js#anonymous'],
			l: function(s) {
				//$('body').append("<div>" + s + "</div>");
				console.log(s);
			},
			
			run: function() {
				app.l('begin: run');
				if (app.debug) {
					// reference: http://phonegap.github.com/weinre/
					app.l('attempting to install remote debugging by connecting to ' + app.remoteDebugURL);
					var urls = app.remoteDebugURLs.slice();
					
					(function installRemoteDebugging() {
						$.ajax({
							url: urls.shift(),
						 	dataType: "script",
							complete: function(jqXHR, textStatus) {
								app.l('complete called');
							},
						  	success: function() {
								app.l('remote debugging installed by loading URL at' + this.url);
							},
							error: function() {
								app.l('error called');
								if (urls.length > 0) {
									installRemoteDebugging();
								}
							}
						});						
					})();
				}

				app.installSalesforceMockAPI();
				
				if ( app.settings.get('initialDataDownloadComplete') ) {
					app.ui.render();
				} else {
					app.l('loading initial data set')
					app.data.load(app.ui.render);
				}
				
				
			},
			
			settings: {
				set: function(key, value) {
					localStorage.setItem(key, JSON.stringify(value));
				},
				get: function(key) {
					var value = localStorage.getItem(key);
					return (value ? JSON.parse(value) : value);
				}
			},
			
			data: {
				meta: {
					'contact': {
						'type': 'contact',
						'fields': [
							{
								'name': 'LastName',
								'label': 'Last name'
							},
							{
								'name': 'FirstName',
								'label': 'First name'
							},
							{
								'name': 'Title',
								'label': 'Title'
							},
							{
								'name': 'Department',
								'label': 'Department'
							},
							{
								'name': 'Phone',
								'label': 'Phone'
							},
							{
								'name': 'Email',
								'label': 'Email'
							}
						],
						'pageTitle': 'Contacts',
						'sortFn': makeCompareFunctionFromSortDefs([
							{
								'prop': 'LastName',
								'order': 'asc'
							},
							{
								'prop': 'FirstName',
								'order': 'asc'
							}
						]),
						'rowTitleFn': function(obj) {
							return obj.LastName + ', ' + obj.FirstName;
						}
					},
					'account': {
						'type': 'account',
						'pageTitle': 'Accounts',
						'sortFn': makeCompareFunctionFromSortDefs([
							{
								'prop': 'Name',
								'order': 'asc'
							}
						]),
						'rowTitleFn': function(obj) {
							return obj.Name;
						}
					}
				},
				
				load: function(cb) {
					$.each(app.data.meta, function(idx, meta) {
						var webServiceName = 'MyWebService';
						var webServiceMethodName = "get" + app.utl.capitalizeFirstLetter(meta.type) + "s";
						app.l('calling web service' + webServiceName + '.'+ webServiceMethodName);
						var objs = sforce.apex.execute("MyWebService", webServiceMethodName, {});
						app.l('retrieved ' + objs.length + ' ' + meta.type + 's');
						app.data.saveAll(meta.type, objs);
					});
					app.settings.set('initialDataDownloadComplete', true);
					cb.apply(this);
				},
				
				exists: function(type, id) {
					return (app.data.getObjByTypeAndId(type, id) != null);
				},
				
				all: function(type) {
					return JSON.parse(localStorage.getItem(type)).sort(app.data.meta[type].sortFn);
				},
				
				saveAll: function(type, objs) {
					objs.sort(app.data.meta[type].sortFn);
					localStorage.setItem(type, JSON.stringify(objs));
				},
				
				save: function(type, obj) {
					var o = app.data.getObjByTypeAndId(type, obj.Id);
					var objs = app.data.all(type);
					
					// udpate
					if (o) {
						
						var idxRemove = -1;
						$.each(objs, function(idx, e) {
							if (e.Id == o.obj.Id) {
								idxRemove = idx;
							}
						});
						objs.splice(idxRemove, 1);
					}
					
					objs.push(obj);
					app.data.saveAll(type, objs);					
				},
				
				getObjByTypeAndId: function(type, id) {
					var objs = app.data.all(type);
					var filtered = $.grep(objs, function(obj, idx) {
						return obj.Id == id;
					});
					
					if (filtered.length > 0) {
						return {'def': app.data.meta[type], 'obj': filtered[0]};	
					} else {
						return null;
					}
				}
			},
			
			ui: {
				
				$container: function() {
					return $('#container');
				},
				
				render: function() {
					app.l('begin: render');
					
					app.ui.renderListPages();
					
					$.each(app.ui.eventHandlers, function(idx, handler) {
						handler.fn.apply(this);
					});
						
					$("#container").show();
					$.mobile.initializePage();
					
					app.l('end: render');
				},
				
				createListPage: function(type) {
					var meta = app.data.meta[type],
					    $p = $('#object-list-page-template').tmpl(app.data.meta[type]),
					    $l = $p.find('#' + type + '-list'),
						sectionName = '';
						
					$.each(app.data.all(type), function(idx, obj) {
						var o = {'obj': obj, 'def': meta};
						var rowSectionName = meta.rowTitleFn(obj)[0].toUpperCase();
						
						if (sectionName != rowSectionName) {
							sectionName = rowSectionName;
							$l.append( $('<li data-role="list-divider">' + sectionName + '</li>') );
						}

						$l.append( $('#object-row-template').tmpl(o) );
					});
					return $p;
				},
				
				createDetailPage: function(o) {
					return $('#' + o.def.type + '-detail-page-template').tmpl(o);
				},
				
				renderDetailPage: function(o) {
					var pageId = '#' + o.def.type + '-' + o.obj.Id;
					
					// remove page if it exists
					if ($(pageId).size() > 0) {
						$(pageId).empty().remove();
					}
					
					var $p = app.ui.createDetailPage(o);
					app.ui.$container().append( $p );
					return $p;				
				},
				
				$listPage: function(type) {
					return $('#' + type + '-list-page');
				},
				
				renderListPage: function(type) {
					var $p = app.ui.$listPage(type);
					
					// if page exists, remove it
					if ($p.size() > 0) {
						$p.empty();
						$p.remove();
					}
					
					$p = app.ui.createListPage(type);
					app.ui.$container().append( $p );
					return $p;
				},
				
				renderListPages: function() {
					$.each(app.data.meta, function(idx, meta) {
						app.ui.renderListPage(meta.type);
					});					
				},
				
				eventHandlers: [
					{
						'name': 'objListRowClick',
						'fn': function() {
							$('.list-row').live('click', function(e, info) {
								var $e = $(this),
									objType = $e.jqmData('obj-type'),
									objId = $e.jqmData('obj-id'),
									pageId = '#' + objType + '-' + objId;

								var o = app.data.getObjByTypeAndId(objType, objId);
								var $p = app.ui.renderDetailPage(o);

								$.mobile.changePage($p);
								e.preventDefault();
							});					
						}
					},
					{
						'name': 'objAddLink',
						'fn': function() {
							$('.object-add-link').live('click', function(e, info) {
								var $e = $(this),
									objType = $e.jqmData('obj-type'),
									objId = $e.jqmData('obj-id'),
									pageId = '#' + objType + '-edit-page';

								$(pageId).remove();

								console.log(pageId);
								
								var o = app.data.getObjByTypeAndId(objType, objId);
								
								// adding new object
								if (!o) {
									o = {'def': app.data.meta[objType], 'obj': {}};
								}

								$('#container').append( $('#' + objType + '-edit-page-template').tmpl(o) );
								$.mobile.changePage( $(pageId) );
								//e.stopPropagation();
								//return false;			
								e.preventDefault();
							});
						}
					},
					{
						'name': 'objSaveLink',
						'fn': function() {
							$('.object-save-link').live('click', function(e, info) {
								app.l('begin: objSaveLink')
								var $e = $(this),
									objType = $e.jqmData('obj-type'),
									objId = $e.jqmData('obj-id'),
									pageId = '#' + objType + '-edit-page';

								$.mobile.loadingMessage = "Saving ...";
								$.mobile.showPageLoadingMsg();

								var $form = $(pageId).find('form');

								app.l('saving ' + objType +': ' + $form.serializeArray());

								setTimeout(function() {
									var o = app.utl.formDataToObject($form);				
									
									var result = sforce.apex.execute("MyWebService", "upsertObject", {'params': $form.serialize()});
									o.Id = result[0];
									app.data.save(objType, o);
									
									var $p = app.ui.renderListPage(objType);
									
									$.mobile.hidePageLoadingMsg();
									//history.go(-1);
									$.mobile.changePage('#' + objType + '-list-page', {'reverse': true});
								}, 250);

								//e.stopPropagation();
								//return false;
								e.preventDefault();
							});
						}
					}
								
				]
			},
			
			installSalesforceMockAPI: function() {
				// stub out salesforce web service api if it doesn't exist - useful for development with
				// a test data set
				if (typeof(sforce) === 'undefined') {
					window.sforce = {
						'apex': {
							'execute': function(name, method, params) {
								if (method == 'getContacts') {
									return mock.data.contacts;
								}

								if (method == 'getAccounts') {
									return mock.data.accounts;
								}

								if (method == 'upsertObject') {
									var obj = app.utl.queryStringToObject(params.params);
									return [obj['Id'] || (Math.floor(Math.random()*10000000000) + '')];
								}
							}
						}
					}
				}				
			},
			
			utl: {
				// this function depends on the cache.manifest file being correctly setup
				// see http://j.mp/r7KlZo for details
				connectivityCheck: function(onlineCb, offlineCb) {
					$.getScript('online.js', function() {
						if (window.combrianpfeil.isOnline) {
							onlineCb.apply(this);
						} else {
							offlineCb.apply(this);							
						}
					});
				},
				
				capitalizeFirstLetter: function(s) {
				    return s.charAt(0).toUpperCase() + s.slice(1);
				},
				
				queryStringToObject: function(s) {
					var o = {};

					s.replace(/\b([^&=]*)=([^&=]*)\b/g, function (m, a, d) {
						if (typeof o[a] != 'undefined') {
							o[a] += ',' + d;
						} else {
							o[a] = d;
						}
					});

					return o;
				},
				
				formDataToObject: function($f) {
					var o = {};				
					$.each($f.serializeArray(), function(idx, prop) {
						o[prop.name] = prop.value;
					});
					return o;
				}
			}
		};
		
		
		// load jqm dynamically so it renders the dynamically added DOM content / pages
		// $.getScript('http://code.jquery.com/mobile/1.0b2/jquery.mobile-1.0b2.min.js', function() {
		// 	$("#container").show();
		// 	$('#loading').hide();
		// 	//$.mobile.changePage( $('#contact-list-page'), {changeHash: true});
		// 	
		// });
		app.run();
		
		window.app = app;
	});
	
	jQuery(document).bind("mobileinit", function(){
		console.log('mobileinit');
		jQuery.mobile.page.prototype.options.domCache = false;
		jQuery.mobile.autoInitializePage = false;
	});

})();