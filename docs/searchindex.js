Search.setIndex({docnames:["api","brainiak","brainiak.eventseg","brainiak.factoranalysis","brainiak.fcma","brainiak.funcalign","brainiak.hyperparamopt","brainiak.reprsimil","brainiak.searchlight","brainiak.utils","contributing","index","installation","modules","release_notes"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,sphinx:56},filenames:["api.rst","brainiak.rst","brainiak.eventseg.rst","brainiak.factoranalysis.rst","brainiak.fcma.rst","brainiak.funcalign.rst","brainiak.hyperparamopt.rst","brainiak.reprsimil.rst","brainiak.searchlight.rst","brainiak.utils.rst","contributing.rst","index.rst","installation.rst","modules.rst","release_notes.rst"],objects:{"":{brainiak:[1,0,0,"-"]},"brainiak.eventseg":{event:[2,0,0,"-"]},"brainiak.eventseg.event":{EventSegment:[2,1,1,""]},"brainiak.eventseg.event.EventSegment":{P:[2,2,1,""],calc_weighted_event_var:[2,3,1,""],event_pat_:[2,2,1,""],event_var_:[2,2,1,""],find_events:[2,3,1,""],fit:[2,3,1,""],ll_:[2,2,1,""],model_prior:[2,3,1,""],predict:[2,3,1,""],segments_:[2,2,1,""],set_event_patterns:[2,3,1,""]},"brainiak.factoranalysis":{htfa:[3,0,0,"-"],tfa:[3,0,0,"-"]},"brainiak.factoranalysis.htfa":{HTFA:[3,1,1,""]},"brainiak.factoranalysis.htfa.HTFA":{fit:[3,3,1,""],global_posterior_:[3,2,1,""],global_prior_:[3,2,1,""],local_posterior_:[3,2,1,""],local_weights_:[3,2,1,""]},"brainiak.factoranalysis.tfa":{TFA:[3,1,1,""]},"brainiak.factoranalysis.tfa.TFA":{F_:[3,2,1,""],W_:[3,2,1,""],fit:[3,3,1,""],get_bounds:[3,3,1,""],get_centers:[3,3,1,""],get_centers_mean_cov:[3,3,1,""],get_factors:[3,3,1,""],get_map_offset:[3,3,1,""],get_template:[3,3,1,""],get_unique_R:[3,3,1,""],get_weights:[3,3,1,""],get_widths:[3,3,1,""],get_widths_mean_var:[3,3,1,""],init_centers_widths:[3,3,1,""],init_prior:[3,3,1,""],local_posterior_:[3,2,1,""],set_K:[3,3,1,""],set_centers:[3,3,1,""],set_centers_mean_cov:[3,3,1,""],set_prior:[3,3,1,""],set_seed:[3,3,1,""],set_widths:[3,3,1,""],set_widths_mean_var:[3,3,1,""]},"brainiak.fcma":{classifier:[4,0,0,"-"],cython_blas:[4,0,0,"-"],mvpa_voxelselector:[4,0,0,"-"],preprocessing:[4,0,0,"-"],util:[4,0,0,"-"],voxelselector:[4,0,0,"-"]},"brainiak.fcma.classifier":{Classifier:[4,1,1,""]},"brainiak.fcma.classifier.Classifier":{decision_function:[4,3,1,""],fit:[4,3,1,""],num_digits_:[4,2,1,""],num_features_:[4,2,1,""],num_samples_:[4,2,1,""],num_voxels_:[4,2,1,""],predict:[4,3,1,""],score:[4,3,1,""],test_data_:[4,2,1,""],test_raw_data_:[4,2,1,""],training_data_:[4,2,1,""]},"brainiak.fcma.cython_blas":{compute_corr_vectors:[4,4,1,""],compute_kernel_matrix:[4,4,1,""],compute_self_corr_for_voxel_sel:[4,4,1,""],compute_single_matrix_multiplication:[4,4,1,""],compute_single_self_corr_gemm:[4,4,1,""],compute_single_self_corr_syrk:[4,4,1,""]},"brainiak.fcma.mvpa_voxelselector":{MVPAVoxelSelector:[4,1,1,""]},"brainiak.fcma.mvpa_voxelselector.MVPAVoxelSelector":{run:[4,3,1,""]},"brainiak.fcma.preprocessing":{RandomType:[4,1,1,""],generate_epochs_info:[4,4,1,""],prepare_fcma_data:[4,4,1,""],prepare_mvpa_data:[4,4,1,""],prepare_searchlight_mvpa_data:[4,4,1,""]},"brainiak.fcma.preprocessing.RandomType":{NORANDOM:[4,2,1,""],REPRODUCIBLE:[4,2,1,""],UNREPRODUCIBLE:[4,2,1,""]},"brainiak.fcma.util":{compute_correlation:[4,4,1,""]},"brainiak.fcma.voxelselector":{VoxelSelector:[4,1,1,""]},"brainiak.fcma.voxelselector.VoxelSelector":{run:[4,3,1,""]},"brainiak.funcalign":{rsrm:[5,0,0,"-"],srm:[5,0,0,"-"],sssrm:[5,0,0,"-"]},"brainiak.funcalign.rsrm":{RSRM:[5,1,1,""]},"brainiak.funcalign.rsrm.RSRM":{fit:[5,3,1,""],r_:[5,2,1,""],random_state_:[5,2,1,""],s_:[5,2,1,""],transform:[5,3,1,""],transform_subject:[5,3,1,""],w_:[5,2,1,""]},"brainiak.funcalign.srm":{DetSRM:[5,1,1,""],SRM:[5,1,1,""]},"brainiak.funcalign.srm.DetSRM":{fit:[5,3,1,""],random_state_:[5,2,1,""],s_:[5,2,1,""],transform:[5,3,1,""],transform_subject:[5,3,1,""],w_:[5,2,1,""]},"brainiak.funcalign.srm.SRM":{comm:[5,2,1,""],fit:[5,3,1,""],mu_:[5,2,1,""],random_state_:[5,2,1,""],rho2_:[5,2,1,""],s_:[5,2,1,""],sigma_s_:[5,2,1,""],transform:[5,3,1,""],transform_subject:[5,3,1,""],w_:[5,2,1,""]},"brainiak.funcalign.sssrm":{SSSRM:[5,1,1,""]},"brainiak.funcalign.sssrm.SSSRM":{bias_:[5,2,1,""],classes_:[5,2,1,""],fit:[5,3,1,""],predict:[5,3,1,""],random_state_:[5,2,1,""],s_:[5,2,1,""],theta_:[5,2,1,""],transform:[5,3,1,""],w_:[5,2,1,""]},"brainiak.hyperparamopt":{hpo:[6,0,0,"-"]},"brainiak.hyperparamopt.hpo":{fmin:[6,4,1,""]},"brainiak.image":{ConditionSpec:[1,1,1,""],MaskedMultiSubjectData:[1,1,1,""],SingleConditionSpec:[1,1,1,""],mask_image:[1,4,1,""],mask_images:[1,4,1,""],multimask_images:[1,4,1,""]},"brainiak.image.MaskedMultiSubjectData":{from_masked_images:[1,5,1,""]},"brainiak.image.SingleConditionSpec":{extract_labels:[1,3,1,""]},"brainiak.io":{load_boolean_mask:[1,4,1,""],load_images:[1,4,1,""],load_images_from_dir:[1,4,1,""],load_labels:[1,4,1,""],save_as_nifti_file:[1,4,1,""]},"brainiak.isc":{bootstrap_isc:[1,4,1,""],compute_summary_statistic:[1,4,1,""],isc:[1,4,1,""],isfc:[1,4,1,""],permutation_isc:[1,4,1,""],phaseshift_isc:[1,4,1,""],squareform_isfc:[1,4,1,""],timeshift_isc:[1,4,1,""]},"brainiak.reprsimil":{brsa:[7,0,0,"-"]},"brainiak.reprsimil.brsa":{BRSA:[7,1,1,""],GBRSA:[7,1,1,""],Ncomp_SVHT_MG_DLD_approx:[7,4,1,""],prior_GP_var_half_cauchy:[7,4,1,""],prior_GP_var_inv_gamma:[7,4,1,""]},"brainiak.reprsimil.brsa.BRSA":{C_:[7,2,1,""],L_:[7,2,1,""],U_:[7,2,1,""],X0_:[7,2,1,""],X0_null_:[7,2,1,""],bGP_:[7,2,1,""],beta0_:[7,2,1,""],beta0_null_:[7,2,1,""],beta_:[7,2,1,""],fit:[7,3,1,""],lGPinten_:[7,2,1,""],lGPspace_:[7,2,1,""],nSNR_:[7,2,1,""],n_nureg_:[7,2,1,""],random_state_:[7,2,1,""],rho_:[7,2,1,""],score:[7,3,1,""],sigma_:[7,2,1,""],transform:[7,3,1,""]},"brainiak.reprsimil.brsa.GBRSA":{C_:[7,2,1,""],L_:[7,2,1,""],U_:[7,2,1,""],X0_:[7,2,1,""],X0_null_:[7,2,1,""],beta0_:[7,2,1,""],beta0_null_:[7,2,1,""],beta_:[7,2,1,""],fit:[7,3,1,""],nSNR_:[7,2,1,""],n_nureg_:[7,2,1,""],random_state_:[7,2,1,""],rho_:[7,2,1,""],score:[7,3,1,""],sigma_:[7,2,1,""],transform:[7,3,1,""]},"brainiak.searchlight":{searchlight:[8,0,0,"-"]},"brainiak.searchlight.searchlight":{Ball:[8,1,1,""],Cube:[8,1,1,""],Diamond:[8,1,1,""],Searchlight:[8,1,1,""],Shape:[8,1,1,""]},"brainiak.searchlight.searchlight.Searchlight":{broadcast:[8,3,1,""],distribute:[8,3,1,""],run_block_function:[8,3,1,""],run_searchlight:[8,3,1,""]},"brainiak.searchlight.searchlight.Shape":{mask_:[8,2,1,""]},"brainiak.utils":{fmrisim:[9,0,0,"-"],utils:[9,0,0,"-"]},"brainiak.utils.fmrisim":{apply_signal:[9,4,1,""],calc_noise:[9,4,1,""],compute_signal_change:[9,4,1,""],convolve_hrf:[9,4,1,""],export_3_column:[9,4,1,""],export_epoch_file:[9,4,1,""],generate_noise:[9,4,1,""],generate_signal:[9,4,1,""],generate_stimfunction:[9,4,1,""],mask_brain:[9,4,1,""]},"brainiak.utils.utils":{ReadDesign:[9,1,1,""],array_correlation:[9,4,1,""],center_mass_exp:[9,4,1,""],concatenate_not_none:[9,4,1,""],cov2corr:[9,4,1,""],from_sym_2_tri:[9,4,1,""],from_tri_2_sym:[9,4,1,""],gen_design:[9,4,1,""],p_from_null:[9,4,1,""],phase_randomize:[9,4,1,""],sumexp_stable:[9,4,1,""],usable_cpu_count:[9,4,1,""]},"brainiak.utils.utils.ReadDesign":{StimLabels:[9,2,1,""],column_types:[9,2,1,""],design:[9,2,1,""],design_task:[9,2,1,""],n_basis:[9,2,1,""],n_col:[9,2,1,""],n_orth:[9,2,1,""],n_stim:[9,2,1,""],read_afni:[9,3,1,""]},brainiak:{eventseg:[2,0,0,"-"],factoranalysis:[3,0,0,"-"],fcma:[4,0,0,"-"],funcalign:[5,0,0,"-"],hyperparamopt:[6,0,0,"-"],image:[1,0,0,"-"],io:[1,0,0,"-"],isc:[1,0,0,"-"],reprsimil:[7,0,0,"-"],searchlight:[8,0,0,"-"],utils:[9,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:classmethod"},terms:{"3ddeconvolv":9,"3rd":1,"4th":9,"bal\u00e1z":6,"boolean":[1,3,7,8],"capot\u0103":[3,5],"case":[1,4,7,9,10],"class":[1,2,3,4,5,7,8,9],"default":[1,2,3,4,5,6,7,9,10,11,12,14],"enum":4,"export":[10,12,14],"final":[2,4,11],"float":[1,2,3,4,5,6,7,8,9],"function":[1,2,3,4,5,6,7,8,9,10,11,14],"import":[7,9],"int":[1,2,3,4,5,6,7,8,9],"j\u00e4\u00e4skel\u00e4inen":1,"k\u00e9gl":6,"long":[1,9,12],"new":[1,2,4,5,6,7,9,10,12,14],"null":[1,2,7,9],"public":[5,10,11],"r\u00e9mi":6,"return":[1,2,3,4,5,6,7,8,9,10,14],"short":[9,10],"static":10,"true":[1,2,4,7,8,9],"try":[7,9,10,11],"var":[2,9],"while":[1,4,7],Added:14,And:7,But:7,For:[1,2,7,8,9,10,12],OSes:10,One:[1,3,7,12],PRs:10,TRs:[1,3,7],The:[1,2,3,4,5,7,8,9,10,11,12],Then:[11,12],There:[5,7,9,10],These:[7,10],Use:[4,5,7,10,12],Used:4,Useful:9,Uses:1,__name__:10,_build:10,_default_var_schedul:2,_generate_temporal_nois:9,_ll_train_:7,abbrevi:11,abil:[9,14],abl:[9,10,12],about:9,abov:[7,9,10],absolut:9,accept:[7,9,10],access:[1,10],accommod:1,accord:[1,5,9,10],accordingli:[4,7],account:[7,9],accur:[7,9],accuraci:[4,9],acoust:5,acquir:7,across:[1,3,4,5,7,9,14],activ:[1,2,4,7,8,9,10,12],actual:[1,9],add:[10,12,14],added:[2,7,9,14],adding:12,addit:[5,7,12],addition:11,address:9,adjac:[4,7],adjcent:7,adjust:9,advanc:[5,7,10],affect:1,affin:1,afni:[9,14],after:[1,2,4,7,9,10],again:1,against:[7,10],aggreg:4,agre:4,aic:7,alexand:4,algorithm:[3,5,6,7,10],align:[5,7,9],all:[1,2,4,5,7,8,9,10,14],alloc:3,allow:[2,5,6,7,9,10,11],almost:7,alon:3,along:[1,2,7,10],alpha:[4,5,7],alreadi:[7,9,10,12],also:[2,3,4,5,7,10,11,12],alter:9,altern:[1,2,4,7,8,10],although:[4,10],alwai:[4,10],among:[1,5,9],amount:7,amplitud:[7,9,14],anaconda:10,analog:7,analys:[1,9,14],analysi:[1,3,4,5,7,9,10,12,14],analyz:7,anderson2016:5,anderson:[3,4,5],andersonm2016:3,andersonmj2016:3,ani:[1,2,4,7,8,9,10],anneal:[2,7],anneal_spe:7,annot:10,anoth:9,anticip:9,api:[4,10,11,14],appear:2,append:6,appli:[1,2,4,5,7,9],applic:[1,9],apply_sign:9,appraoch:1,approach:[1,3,7],appropri:[9,10],approx:5,approxim:[1,5,7,9,14],apt:12,arbitrarili:9,architectur:6,archiv:11,arctanh:1,arg:6,argument:[4,7,9],arma:[9,14],arnumb:7,around:[2,7],arrai:[1,2,3,4,5,7,8,9,14],arrari:3,array_correl:9,array_lik:3,asieh:2,ask:10,assign:[1,4,9],assum:[1,2,4,5,7,9,14],assumpt:[4,7],asymmetr:[1,14],atla:9,attenu:9,attribut:[7,9],author:9,authorit:10,auto:[4,7],auto_nuis:7,auto_reg_rho:9,auto_reg_sigma:9,autocorrel:9,autom:10,automat:[2,7,10,12,14],autoregress:[7,9],avail:[2,4,7,8,10,11,12,14],averag:[1,4,7,9],awar:9,axes:1,axi:[1,9],back:[7,9],backward:2,balanc:5,baldassano:[2,9],ball:[8,14],bar:4,bardenet:6,base:[1,2,3,4,5,6,7,8,9,14],baseestim:[2,3,4,5,7],baselin:7,baseline_singl:7,bash:12,bash_profil:12,basi:9,bayesian:[3,7,14],bcast_var:8,bcd:5,bear:10,becaus:[7,9,10,12,14],becom:7,been:[2,4,7,8,9],befor:[2,4,7,9,10,11,12],begin:6,behind:7,being:[4,9,14],believ:7,bellow:10,belong:4,below:[4,9],bengio:6,bergstra2011:6,bergstra2013:6,bergstra:6,best:[6,9],beta0:7,beta0_:7,beta0_null_:7,beta:[7,14],beta_0:7,beta_:7,beta_i:7,better:[3,4,7,14],between:[1,2,3,4,5,7,9,11],beyond:7,bfg:7,bfgd:14,bgp_:7,bia:[5,7],bias:5,bias_:5,bic:7,big:[3,5,7,9],bigdata:[3,5],bigger:9,bimod:9,bin:[7,10,12],binari:[4,9],biologi:9,biometr:1,bla:4,bld:10,blei:3,block:[5,7,8,9],block_fn:8,bold:7,bool:[1,2,4,9],boollean:9,bootstrap:1,bootstrap_isc:1,border:8,both:[1,4,7,9,14],bound:[3,7,9],boundari:8,box:9,brain:[1,3,4,7,8,9,12],brainiak:[10,11,12],brainiak_pr_venv:10,branch:10,brew:12,bright:7,broadcast:[4,8],brown:[3,4,5],browser:11,brsa:[0,1,11,13,14],bug:14,bugfix:11,build:[10,12],built:[4,9,10],button:10,bz2:10,cach:10,cai2016:7,cai:[7,9],calc_nois:9,calc_weighted_event_var:2,calcul:[3,7,9,14],call:[1,4,7,8,10],callabl:[1,2,3,7],cameron:9,can:[1,2,4,5,7,8,9,10,11,12,14],cannot:[1,2,7],capabl:[7,10],capac:7,capota:3,captur:[5,7,9],car:9,care:9,carlo:1,cast:[1,4],cauchi:7,caus:[7,14],caviti:9,cdot:7,center:[3,8,9],center_mass_exp:9,centers_mean_cov:3,centr:9,central:8,chain:2,chang:[7,9,10,14],channel:[10,12,14],character:9,characterist:3,chat:11,check:[7,10],checkout:10,chen2015:5,chen2016:1,chen:[1,2,3,5],choic:7,choleski:7,choos:[7,10],choosen:9,chosen:7,chri:9,christoph:2,ci_percentil:1,circular:1,circularli:1,clang:12,clarifi:14,classes_:5,classif:4,classifi:[0,1,2,5,10,11,13],classifiermixin:5,classmethod:1,clf:4,client:10,clip:9,clone:10,close:7,cluster:[7,10],cmake:12,cnr_amp2:9,cnr_amp:9,cnr_signal:9,code:[9,10,11],coeffici:[1,4,7,9,14],cognit:7,cohen:[3,4],collabor:[10,11],collaps:[1,4],collinear:7,cols_us:9,column:[1,4,7,9],column_typ:9,com:[10,11],combin:[7,9],come:9,comm:[3,4,5],comm_world:3,command:[10,11,12],commit:10,common:7,commun:[1,3,4,5],compact:4,comparison:[2,7],compat:10,compil:[11,12],complementari:[7,10],complex:5,compli:2,compon:[4,5,7,9],compos:2,comprehens:1,compris:1,comput:[1,2,3,4,5,7,9,10,14],compute_corr_vector:4,compute_correl:4,compute_kernel_matrix:4,compute_self_corr_for_voxel_sel:4,compute_signal_chang:9,compute_single_matrix_multipl:4,compute_single_self_corr_gemm:4,compute_single_self_corr_syrk:4,compute_summary_statist:1,concaten:[7,9],concatenate_not_non:9,conceiv:9,concern:9,concis:10,conda:[10,11,14],conda_hom:10,condens:1,condit:[1,4,7,9],conditionspec:1,conduct:4,confer:[3,4,5],confid:[1,4],config:10,connect:4,connectivit:3,consid:[4,7,8,9,10],consider:[8,9],consist:4,constant:[7,9],constraint:3,construct:[1,4,9],consum:9,consumpt:7,contain:[2,3,4,5,7,8,9,10,11],content:9,continu:[2,4,7,9],contrast:9,contribut:[2,7,9],contributor:10,control:[1,6],conveni:[9,10],converg:[7,9],convert:[1,4,7,9],convolut:[9,14],convolv:9,convolve_hrf:9,coord:7,coordiat:7,coordin:[3,5,7],cooridn:3,coprocessor:4,core:10,corr:[4,9],corr_data:4,corrcoef:4,correct:[9,14],correl:[1,4,7,9,14],correspond:[1,2,4,7,9],corrlat:1,corrlel:1,corrupt:9,cortic:1,cost:7,could:[7,9,10],count:[8,14],cours:[2,4,7,9],cov2corr:9,cov:[4,9],cov_vec_s:3,covari:[3,4,5,7,9],covarinc:9,coverag:10,cox:[1,6],cppflag:12,cpu:[9,14],cpuset:[4,8,9],creat:[1,9,10,11,12],creation:9,critic:9,cross:[4,7,14],csv:9,cube:[4,8,9],current:[7,9,10,12],custom:[6,7],cxx:12,cython:14,cython_bla:[0,1,11,13],daniel:6,dark:7,data1:4,data2:4,data:[1,2,3,4,5,7,8,9,10,14],data_stack:9,data_typ:[1,4],dataset:[2,3,5,7,8,9,10],date:10,david:[6,7],deactiv:10,deal:14,debug:10,decai:7,decibel:9,decid:7,decis:4,decision_funct:4,decod:[7,14],decomposit:7,decreas:[2,7],defens:10,defin:[4,7,8,9],definit:[2,7,9],degre:7,delet:10,demo:11,depend:[7,9,10,12],deprec:11,deriv:7,descend:4,descent:5,describ:[2,7,9,10],descript:[7,10],design:[1,7,9,10,14],design_task:9,designn:9,desir:[7,8,9],despit:12,detail:[2,5,7,9,10],determin:[7,9,14],determini:7,determinist:[5,14],detsrm:5,dev:[10,12],develop:10,deviat:[4,7,9],diagon:[1,7,14],diamet:3,diamond:8,dict:9,dictionari:[6,7,9],did:7,differ:[1,2,3,4,5,7,9],digit:4,dim:9,dimens:[1,3,4,5,6,7,9],dimension:[1,6,9],directli:[2,10],directori:[1,10,11,12],discov:[2,3],discret:7,dishon:5,disp:7,dist:[6,10],distanc:[1,4,7,8],distinguish:9,distribut:[1,2,4,5,6,7,8,9,10,14],divid:[4,7,9],dld:7,doc:[3,9,10,11,14],docker:[10,14],dockerfil:10,docstr:10,doctor:12,document:[7,10],doe:[1,4,6,7,8,9,10,12],dogbox:3,doi:[1,2,3,5,9],domain:9,done:[4,7],donoho:7,dot:[4,5],doubl:[9,14],double_gamma:9,double_gamma_hrf:9,download:11,downsampl:9,drawn:9,drift:[9,14],drift_sigma:9,driven:7,due:[7,9],dunlap:1,duplic:10,durat:9,dure:[1,2,4,7,9,10],dynam:[1,3],each:[1,2,3,4,5,7,8,9,10],earli:10,easi:[10,11],edg:[8,9],edit:10,effect:[1,7,12],effici:[1,9],effort:10,either:[1,3,7,9,10,14],element:[3,5,7,9],elicit:7,elli:[5,9],elsewher:[7,8],email:11,empir:7,empti:[6,9],enabl:[3,5,10],encount:7,end:[1,2,4,6,7,9,12],enough:7,ensur:[7,10],enter:[9,11],entri:[6,7,8,9],enumer:4,environ:[10,12],epoch:[1,4,9,14],epoch_info:4,epoch_length:4,epoch_list:4,epochs_per_subj:4,epsilon:7,epsilon_i:7,equal:[1,2,4,7,8,9,14],equat:5,equival:[5,7,9,10],error:[9,10,14],essenti:[4,12],estim:[3,5,7,9,14],eta:7,etc:9,euclidean:8,ev_var:2,evalu:[6,7],even:[1,10],event:[0,1,7,9,11,13,14],event_chain:[2,14],event_dur:9,event_pat:2,event_pat_:2,event_var_:2,eventseg:[0,1,11,13,14],everi:[1,4,7,10],everyth:[7,10],evok:[7,9],exact:[1,3,9],exactli:7,examin:12,exampl:[1,2,7,8,9,10,14],except:[4,7,10],exclud:[1,7],exclus:4,execut:[10,11,12],exist:[1,5,7,10],exit:14,exp:[7,9],expect:[5,7,9],experi:[7,9],experiment:7,explain:[7,9,10],explan:14,explicitli:2,exploit:6,explor:6,explore_prob:6,expon:9,exponenti:[7,9],export_3_column:9,export_epoch_fil:9,expos:10,express:[4,7],extend:2,extens:[7,10],extent:9,extra:[3,8],extra_block_fn_param:8,extra_param:8,extract:1,extract_label:1,extrem:7,fact:[4,7],factor:[3,5,7,10,14],factoranalysi:[0,1,11,13],fail:[10,12],failur:12,fals:[1,2,3,4,7,9],far:9,fast:14,faster:[7,14],fcma:[0,1,11,13,14],feat:9,featur:[5,9,10,11],feature_coordin:9,feature_s:9,feature_typ:9,features_i:5,fed:7,feedback:[10,11],fetch:10,few:[7,9,12],fewer:7,field:[3,7],file:[1,9,10,12,14],filenam:[1,9],filesystem:4,filter:4,find:[2,6,7,11],find_ev:2,finish:9,first:[1,4,7,9,10,11],fisher:1,fit:[2,3,4,5,7,9,10,14],fit_delta:9,fit_thresh:9,fit_transform:10,fix:[4,7,14],flag:[3,7,12],flat:7,flatten:1,flexibl:9,flip:1,float32:4,fluctuat:[7,14],fmin:6,fmri:[1,2,3,4,5,7,9,10,11,14],fmrisim:[0,1,11,13,14],fname:9,fninf:1,focus:11,fold:4,folder:11,follow:[5,7,8,9,10,12,14],foral:5,forc:7,forg:[10,11,12],fork:10,form:[7,9],formal:7,format:[3,9,10],forward:2,found:[5,6],fourier:9,fpr:1,frac:[4,5],fragment:10,free:10,frequenc:[1,9],from:[1,2,3,4,5,7,8,9,10,11,12,14],from_masked_imag:1,from_sym_2_tri:9,from_tri_2_sym:9,frontier:1,fsl:9,fuhrmann:1,full:[1,2,3,4,7,14],fulli:7,funcalign:[0,1,7,10,11,13,14],funtion:1,furhter:9,further:8,fwhm:9,gamma:[5,7,9],gaussian:[2,7,9],gaussion:7,gavish:7,gbrsa:[7,14],gcc:12,gemm:4,gen_design:[9,14],gener:[1,3,4,5,6,7,9,14],generate_epochs_info:4,generate_nois:9,generate_sign:9,generate_stimfunct:9,genet:9,geometr:7,get:[3,4,9,10],get_bound:3,get_cent:3,get_centers_mean_cov:3,get_factor:3,get_map_offset:3,get_templ:3,get_unique_r:3,get_weight:3,get_width:3,get_widths_mean_var:3,getlogg:10,git:10,github:[10,11,12,14],gitter:11,give:[2,7,9],given:[1,2,3,4,5,7,9],glen:1,global:[3,7,8],global_posterior_:3,global_prior_:3,goal:[7,11],goe:10,going:9,good:[7,10],googlegroup:11,gp_inten:7,gp_space:7,gradient:7,grai:7,granular:10,grei:[7,9],grid:7,group:[1,3,7,10,14],group_assign:1,gtol:7,guid:[10,11],guidelin:[1,10,14],half:[4,7],hall:1,hallwilson1991:1,handl:4,hard:7,hardwar:[4,8],has:[2,3,4,5,7,8,9,10],hasson2004:1,hasson:[1,2,3,5],have:[1,2,4,5,7,8,9,10,11,12,14],haxbi:5,head:[7,9],heavili:[9,10],heineck:4,help:[7,10],hemodynam:[1,9],here:[4,7,10],hessian:7,hidden:2,hierarch:[3,10,14],hierarchi:1,high:[4,7,9,10,14],higher:[5,7,12],highli:10,histogram:9,hmm:2,hold:[4,6],home:12,honei:1,hot:1,hour:12,how:[2,7,9,11],howev:[1,4,5,7,8,9,10,12],hpo:[0,1,11,13],hrf:9,hrf_para:9,hrf_type:9,hsuan:[3,5],htfa:[0,1,10,11,13,14],html:[3,10],http:[1,2,3,5,7,9,10,11,12],hundr:[6,7],hyparamet:6,hyper:6,hyperparamet:[6,7,14],hyperparamopt:[0,1,11,13],hyperparamt:6,hypothesi:1,hypothet:[7,9],ica:7,icassp:5,idea:[7,10,11],ident:4,identifi:[2,9,11],idiosyncrat:5,ieee:[3,5,7],ieeexplor:7,ignor:[1,4,7,9,12],imag:[0,4,7,9,10,12,13,14],image_path:1,image_typ:1,implement:[1,3,4,5,6,7,9,10,14],impli:7,implic:7,importantli:9,impos:7,improv:[5,10,11],in_dir:1,includ:[1,7,9,10,11,12,14],include_orth:9,include_pol:9,inclus:4,incorpor:7,incorrect:9,increas:7,ind:3,independ:[2,9],index:[1,4,9,11],indic:[1,3,4,7,8,9],individu:[5,9,10],infer:3,inflat:1,inform:[3,5,7,9,10],inherit:1,inhomogen:7,init_centers_width:3,init_it:7,init_prior:3,init_random_ev:6,initi:[1,2,3,5,6,7,9,10,14],inner:3,innov:7,input:[1,4,5,9,14],inscrib:8,insert:9,inspir:9,instabl:14,instal:[10,11,14],instanc:[1,3,7,9],instead:[1,4,9,10,14],institut:11,instruct:[12,14],integ:[3,7],integr:[7,10],intel:[4,11],inten:7,inten_smooth_rang:7,intend:[1,9,10],intens:7,inter:[1,3,14],interact:9,interest:[4,7,10],interfac:2,intern:[3,4,5],interpret:[3,7,9],intersect:8,intersubject:1,interv:[1,9],interval_left:9,interval_right:9,intracomm:[3,4,5],intrins:7,introduc:7,inv:7,invers:[1,7],invert:[7,9],invgamma:7,invok:1,involv:14,ipynb:11,isc:[0,11,13,14],isfc:[1,14],isol:[9,10],israel:1,issu:[2,7,10,11,12],item:[1,7],iter:[1,3,4,5,7,9],its:[1,7,9,10],itself:3,jac:3,jacobian:[3,7],jame:6,janic:2,javier:[3,5],jeremi:[3,5],jmlr:6,jneurosci:1,job:[4,14],jointli:7,jonathan:[2,4],journal:[1,4],jsp:7,june:3,jupyt:[10,11],just:7,kai:4,kauppi2010:1,kauppi2014:1,kauppi:1,keep:10,kei:[7,9],kenneth:[2,3,5],kernel:[4,7,9],kernel_matrix:4,keung:3,kit:[1,12],know:10,known:4,label:[1,2,4,5,9,11],lack:7,lag:9,lai:8,lambda:1,languag:10,larg:[4,7,9,10],larger:[4,7,8],last:[1,7,9],latent:3,later:[4,9],latest:[11,12],launch:12,layout:11,ldflag:12,leak:9,learn:[2,5,7,10],learnt:7,least:[3,7,10],least_squar:3,least_suqar:3,leav:[1,7],left:[1,7,9],len:4,length:[1,2,4,7,8,9],lerner2011:[1,9],lerner:1,less:[1,7,8,9,10],let:10,level:[1,3,7,10,14],levi:1,lgpinten_:7,lgpspace_:7,lib:12,libgomp1:12,libmpich:12,librari:10,like:[1,4,7,9,10,14],likelihood:[2,7,9],limit:4,limits_:4,line:[7,9,10,12],linear:[2,3,4],linearli:7,link:[2,12],linux:11,list:[1,2,3,4,5,6,7,8,9,10,11],live:4,ll_:2,ll_null:7,llvm:12,load:[1,7,9],load_boolean_mask:1,load_imag:1,load_images_from_dir:1,load_label:1,local:[1,3,12],local_posterior_:3,local_weights_:3,localhost:11,locat:[4,7,8],log:[2,7,10],log_ptau:7,logger:10,logic:7,login:12,logist:5,lognorm:7,logout:12,logs_rang:7,longer:[9,14],look:[4,9,10,11],loop:9,loos:7,lositski:1,loss:[3,6],loss_:5,loss_fn:6,lot:7,low:[7,9],lower:[3,4,7],lower_ratio:3,lowercas:11,lsmr:3,ma_rho:9,machin:10,maco:11,made:[7,10],magnet:[10,11],magnitud:[4,7,9],mai:[1,4,5,7,8,9,10,11,12],main:9,maintain:4,major:[4,10],make:[4,6,7,9,11,12,14],malach:1,man:[3,5],manhattan:8,mani:[7,9],manner:[5,8],manning2014:3,manning2018:3,manual:[2,9,12],map:[1,5,7],map_offest:3,margin:7,markov:2,mask1:4,mask2:4,mask:[1,4,8,9,14],mask_:8,mask_brain:9,mask_imag:1,mask_self:9,mask_threshold:9,masked_imag:1,maskedmultisubjecdata:1,maskedmultisubjectdata:1,mass:9,master:[4,10],master_rank:4,matan:7,match:[1,7,9],matric:[1,2,4,7,14],matrix1:4,matrix2:4,matrix:[1,2,3,4,5,7,9,14],matter:[7,9],max:[8,9],max_act:9,max_blk_edg:8,max_ev:6,max_global_it:3,max_it:3,max_local_it:3,max_num_tr:3,max_num_voxel:3,max_tr:3,max_valu:9,max_voxel:3,maxim:[2,5,7,9],maximum:[2,3,4,6,7,8,9],maxit:7,mean:[1,2,3,4,5,7,9,10,14],meaning:9,median:1,memori:[2,4,5,7],mention:11,merg:10,messag:[10,12],method:[3,4,5,6,7,9,10,14],metric:[7,9],michael:[3,4,5],middl:9,might:7,mihai:[3,5],millimet:7,mimic:1,min:9,min_:5,min_active_voxels_proport:8,mind:10,mingbo:9,miniconda3:10,minim:[3,6,7],minima:9,minimize_opt:7,minimum:[6,8,10],miniz:7,minut:10,mix:9,mlr:5,mni152:9,mni:[3,7,9],mnt:11,mode:[1,3,10],model:[2,3,4,5,6,7,9,14],model_prior:[2,14],modifi:14,modul:[0,10,11,13,14],molecular:9,moment:[5,11],mont:1,more:[1,3,4,5,7,8,9,10,14],most:[4,7,8,10,12],motion:[7,9],move:9,movi:1,mpi4pi:[3,4,5],mpi:[3,4,5,8,11],mpich:12,mu_:5,much:[2,4,7,9,14],multi:[3,5,8,9,14],multidimension:9,multimask_imag:1,multinomi:5,multipl:[1,2,4,7,9],multipli:4,multiprocess:[4,14],multivari:9,must:[1,2,4,5,7,8,9,10,12],mvpa:14,mvpa_voxelselector:[0,1,11,13],mvpavoxelselector:4,n_align:5,n_base:7,n_basi:9,n_bootstrap:1,n_col:9,n_condit:1,n_dim:3,n_epoch:1,n_event:2,n_iter:[2,5,7],n_nureg:7,n_nureg_:7,n_orth:9,n_pair:1,n_permut:1,n_sampl:3,n_shift:1,n_stim:9,n_subj:3,n_subject:[1,9],n_t:7,n_target:1,n_tr:[1,3,9],n_v:7,n_voxel:[1,3,9],n_y:7,nadathur:4,name:[1,7,9,10,11,14],nan:[1,4,14],napoleon:10,narayanan:4,narr:[1,2],narrat:1,natur:1,nbstripout:10,ncomms12141:1,ncomp:7,ncomp_svht_mg_dld_approx:7,ndarrai:[1,2,4,9],ndarri:7,necessari:[4,7,9,14],need:[4,6,7,9,10,12],neg:[7,9],neglect:9,nepoch:4,network:[1,3,4],neural:[3,5,7,9],neuroimag:[1,3,5],neuroinformat:1,neuron:2,neurosci:[1,4,10,11],never:[4,9,10],newli:12,newsfrag:10,next:[4,9,10],nibabel:[1,10],nichola:4,nifti:[1,10],nii:1,nilearn:[10,14],nip:[5,6,7],nipi:10,nir:1,niv:7,nlss:3,nlss_loss:3,nlss_method:3,node:[4,5],nois:[5,7,9,14],noise_dict:9,noise_funct:9,noisi:7,non:[1,3,9],none:[1,2,3,4,5,7,8,9],nonparametr:1,norandom:4,normal:[2,4,5,7,10],norman:[2,3,5],notabl:1,note:[1,3,4,5,7,9,10,11,12],notebook:[10,11,14],noth:7,notic:7,now:14,nsnr_:7,ntr:4,nuisanc:[7,9,14],nuisance_factor:7,num_assigned_voxel:4,num_digits_:4,num_epoch:4,num_featur:4,num_features_:4,num_fold:4,num_process_voxel:4,num_processed_voxel:4,num_sampl:4,num_samples_:4,num_selected_voxel:4,num_tr:4,num_training_sampl:4,num_voxel:4,num_voxels_:4,number:[1,2,3,4,5,6,7,8,9,10,14],numer:[7,14],numpi:[1,4,7,8,9,10],nureg_method:7,nureg_zscor:7,nvoxel:4,object:[2,3,4,5,7,8,9],observ:[1,7,9],obtain:[4,5,7,10],occur:[7,9],off:1,offici:10,offset:3,older:12,ols:3,omit:10,one:[1,3,4,5,7,8,9,10,12],onli:[1,3,4,5,7,9,10,11,12],onset:[7,9],onto:7,open:[10,11],oper:4,opt:[7,12],optim:[3,5,6,7,11,14],option:[1,4,6,7,8,9,10,14],order:[1,2,4,7,9],ordinari:3,org:[1,2,3,5,7,9,11],organ:[4,10,14],origin:[3,5,9,10,11],orthogoan:9,orthogon:[5,9],other:[1,2,4,7,8,9,10,14],otherwis:[1,4,7,9,11],ought:9,our:[4,10,11,12],out:[1,7,8,9],outli:5,outlin:9,output:[1,4,5,6,9,10,12,14],outsid:10,over:[2,4,5,7,8,9,12],overestim:7,overfit:7,overwrit:12,p_end:2,p_from_nul:[9,14],p_start:2,packag:[0,10,11,12,13,14],pad:8,page:11,pair:[1,9],pairwis:1,pajula:1,paper:[2,5,7],parallel:8,paramet:[1,2,3,4,5,6,7,8,9,10,14],pars:10,part:[1,4,7,9,10],partial:14,particip:[7,9],particular:[7,10],pass:[1,7,8],patch:10,path:[1,2,4,9,10,12],pathlib:1,pattern:[2,3,7,9,14],pca:7,pdf:[7,9],peak:9,pearson:[1,4,9,14],penal:7,peopl:10,pep:10,per:[1,3,5,9],percent:9,percentag:3,percentil:1,percept:2,perfectli:10,perform:[1,3,4,7,8,9,10,11,14],perhap:12,period:9,permut:[1,4,7,9,14],permutation_isc:1,perturb:7,peter:[3,5],phase:[1,9,14],phase_random:[9,14],phaseshift_isc:1,phi:4,phipson:9,phipsonsmyth2010:9,physiolog:9,physiological_sigma:9,pickl:8,pillow:[2,7],pip:[10,11,12],pipelin:10,place:[4,10],plai:4,plane:5,plausibl:7,pleas:[7,9,10,11,12],plo:3,plot:14,plot_brain:14,plu:7,plugin:10,pni:11,point:[1,3,4,7,8,9],polynomi:9,pool_siz:8,portion:[4,8],posit:[1,7,9],possibl:[1,7,9,10],posterior:[2,3,7],power:9,precis:9,preclud:1,precomput:4,predic:1,predict:[2,4,5],prefer:1,prepar:[4,10],prepare_fcma_data:4,prepare_mvpa_data:4,prepare_searchlight_mvpa_data:4,preprocess:[0,1,7,9,11,13],prerequisit:12,present:8,prevent:9,previous:2,primari:10,primarili:[7,10,11],princeton:[9,11],princip:7,principl:7,print:10,prior:[1,2,3,7,14],prior_gp_var_half_cauchi:7,prior_gp_var_inv_gamma:7,privat:7,probabilist:[3,5],probabl:[2,7],problem:[5,11,12],proce:12,procedur:[1,2,5,7,9,14],proceed:4,process:[3,4,5,7,8,9,10],process_num:4,processed_data:4,produc:[4,9,10],product:4,profil:[7,12],program:[7,9,10,12],progress:10,project:10,promin:9,proper:7,properti:[5,7,9],proport:[1,7,8,9,14],proportion:4,propos:5,protip:11,provid:[1,4,7,8,9,10],psc:9,pseudo:7,pseuso:7,psycholog:1,publish:[5,10],pull:[10,11],purpos:[7,9],push:10,put:[9,10],py_a:4,py_alpha:4,py_b:4,py_beta:4,py_c:4,py_k:4,py_lda:4,py_ldb:4,py_ldc:4,py_m:4,py_n:4,py_start_epoch:4,py_start_sampl:4,py_start_voxel:4,py_tran:4,py_trans_a:4,py_trans_b:4,py_uplo:4,pycharm:10,pypi:[10,11,12],pyproject:10,pytest:10,python3:[10,11,12],python:[4,10,11,12],python_vers:10,qquad:5,quad:5,quantif:7,question:11,quickli:10,rad:8,radiu:8,rais:[1,6],ramadg:[3,5],rand_se:5,random:[1,4,5,6,7,9,10,14],random_st:[1,7,9],random_state_:[5,7],randomli:[1,9],randomst:[1,5,7,9],randomtyp:4,rang:[6,7,9],ranganath:3,rank:[7,8],rate:1,rather:2,ratio:[3,6,7,9,14],raw_data1:4,raw_data2:4,raw_data:4,reach:[1,12],read:[4,9,10,11],read_afni:9,readdesign:9,readi:[4,10],readm:10,real:[6,7,9],realist:9,realli:7,reason:[7,9],recept:1,reciev:5,recognit:3,recommend:[3,7,10],reconfigur:1,reconstruct:3,record:[7,10],recov:7,reduc:[4,5,7,11],redund:1,refer:[3,9,11],referenc:11,reflect:[7,9],regardless:7,regener:4,region:[3,4,7,8,9],regress:[3,5,7],regressor:[7,9,14],regular:[5,7],rel:[2,7,9],relat:[1,4,7,9],related:1,relationship:9,releas:[11,12],relev:3,reli:7,remot:[10,14],remov:[8,9,10,11],repeat:10,repeatedli:10,replac:[1,9],report:10,repositori:[10,11],repres:9,represent:[1,7,14],reproduc:[4,10],reprsimil:[0,1,11,13,14],request:[1,7,10],requir:[1,7,9,10,11],resampl:[1,9],rescal:9,research:10,residu:7,resolut:9,resolv:9,reson:[10,11],resourc:11,respect:9,respons:[1,5,7,9,14],response_delai:9,response_dispers:9,rest:10,restrict:[4,8,9,14],result:[1,2,4,7,9,10],result_exp:9,result_sum:9,result_volum:4,retain:1,retriev:7,return_bootstrap:1,return_nan:4,reus:4,revamp:14,revers:9,review:5,reynold:1,rho2_:5,rho:7,rho_:7,rho_bin:7,rho_i:5,ridg:3,right:[9,10],rise:9,robust:[4,5,14],roi:[1,2,4,7],root:[10,11],rosseel:9,round:7,routin:4,row:[1,4,9],rpath:12,rrid:11,rsa:[7,14],rsrm:[0,1,11,13],rst:[10,11],run:[2,3,4,5,7,8,9,10,11,12],run_block_funct:8,run_searchlight:8,rvs:6,s_i:5,safe:12,sai:7,sam:1,same:[1,2,4,5,7,8,9,10],sampl:[1,3,4,5,6,9],sample_weight:4,samples_i:5,satish:4,save:[1,4],save_as_nifti_fil:1,scalar:[2,9],scale:[3,4,7,9,10,14],scale_funct:9,scan:[7,9],scan_dur:9,scan_onset:7,scanner:3,schuck:7,scienc:[1,6],scikit:10,scipi:[1,3,4,6,7,9],score:[4,7,14],scr_014824:11,scrambl:[2,14],screen:11,script:10,sdist:10,search:[6,9,11],searchlight:[0,1,4,7,11,13,14],second:[1,4,7,9,10],secondari:10,see:[1,5,7,9,10,11,12],seed:[1,3,4,5,7,8,9],seek:12,seen:4,segment:[2,14],segments_:2,select:[4,7,9,12,14],self:[2,3,4],semant:10,semi:[5,14],sensori:7,separ:[2,9],sequenc:[1,2,9],seri:[1,7,9],serializ:8,serv:4,servic:10,set1:4,set2:4,set:[1,2,3,4,6,7,8,9,10,12,14],set_cent:3,set_centers_mean_cov:3,set_event_pattern:[2,14],set_k:3,set_prior:3,set_se:3,set_width:3,set_widths_mean_var:3,setup:10,sever:10,sfnr:[9,14],sgemm:4,shape:[1,3,4,5,7,8,9,14],share:[4,5,7,8,14],shell:12,shift:[1,9],shifted_data:9,shin:1,should:[1,2,5,6,7,9,10],shouldn:9,show:[2,10],shown:7,shrink:4,shuffl:[1,2,14],sid:4,side:[9,10],sigma:[3,9],sigma_:7,sigma_i:4,sigma_s_:5,sigma_x:4,sign:1,signal:[5,7,9,14],signal_const:9,signal_funct:9,signal_function_sc:9,signal_magnitud:9,signatur:2,silbert:1,silver:1,silverdunlap1987:1,sim:7,similar:[4,5,7,9,10,14],simoni:1,simony2016:[1,9],simpler:9,simpli:[1,14],simul:[9,14],simultan:[2,5],sinc:[4,9,10],singl:[1,2,5,7,9,10],singleconditionspec:1,singular:7,size:[7,8,9],skalaban:5,sklearn:[2,3,4,5,7],skull:9,sl_rad:8,slice:9,slow:[7,9],slower:[1,7],slowli:2,small:[7,9,10],smaller:[7,10],smooth:[7,9],smyth:9,snr:[7,9,14],snr_bin:7,snr_prior:7,soft:2,soft_l1:3,softmax_i:9,softwar:[1,9,10],solid:10,solut:5,solv:[3,5],some:[7,9,10,12],someth:10,sort:4,sourc:[10,11],space:[1,3,5,6,7,9,10],space_smooth_rang:7,span:9,spars:[5,7],sparser:5,spatial:[1,3,7,9,14],spatialimag:[1,4],spca:7,specif:[1,2,4,7,9,14],specifi:[2,4,6,7,9,12],spectrum:9,speech:5,speedup:4,spell:11,sphere:[8,9],sphinx:10,spread:7,sqrt:[4,7],squar:[1,2,3,14],squareform:1,squareform_isfc:1,srm:[0,1,7,10,11,13,14],srm_image_prediction_exampl:11,sssrm:[0,1,11,12,13,14],ssyrk:4,stabl:[2,9],stachenfeld:3,stack:[1,9],stamp:7,standard:[4,7,9,11],start:[4,7,9,10,11],stat:[1,6,7,9],state:[7,9],statist:[1,9,14],step:[2,7,9,10],step_var:2,still:9,stim_funct:9,stim_onset:9,stimfunct:9,stimfunction_tr:9,stimlabel:9,stimtime_fil:9,stimtime_filenam:9,stimul:5,stimuli:[7,9],stimulu:9,storag:4,store:[1,4,9],stori:1,str:[1,3,4,7,9],stride:4,string:[7,9],strip:9,strong:[7,9],structur:[1,2,4,7,9,10],style:[9,10,14],subj0:8,subj1:8,subj2:8,subj:8,subject:[1,3,4,5,7,8,9,14],submit:10,submodul:[0,11,13],subpackag:[0,9,10,11,13],subproblem:3,subsampl:3,subsequ:[4,10],subset:8,subspac:5,subtract:7,successfulli:12,suffici:9,suffix:1,sum:[2,4,5,7,9],sum_i:5,sumexp_st:9,summari:1,summary_statist:1,sundaram:4,supervis:[5,14],suppli:[1,7,9],support:[1,6,7,9,10,12,14],sure:[4,11,12],svc:4,svm:4,symm:9,symmetr:[4,9],synchron:1,syrk:4,sys:14,system:[5,7,9,12,14],t_m:9,t_n:9,tab:9,tabl:5,tag:10,tail:[1,9],take:[6,7,9,10,12],taken:8,tanh:1,tar:10,target:[1,9,10,14],task:[4,7,9],task_sigma:9,tau2:7,tau2_prior:7,tau:7,tau_rang:7,taylor:1,tda:10,tell:7,temp_r:9,templat:[3,7,9],template_centers_cov:3,template_nam:9,template_prior:3,template_widths_var:3,tempor:[1,7,9],temporal_proport:9,temporal_resolut:9,term:[2,5,9],termin:3,test:[1,2,4,7,8,9,11,14],test_:10,test_data:4,test_data_:4,test_ll:2,test_raw_data_:4,test_srm:10,testing_data:2,text:9,tfa:[0,1,11,13,14],than:[1,2,4,7,8,9,10],theano:12,thei:[2,4,7,9,10],them:[2,4,7,9,10,12],theodor:[3,4,5],theori:7,therefor:[4,7,9,12],theta:5,theta_:5,thi:[1,2,3,4,5,6,7,8,9,10,11,12],third:9,those:[4,7],though:[1,7,10],thousand:[3,5,7],thread:[4,8],three:9,threshold:[1,3,7,9],through:[1,6,7,9,10],thu:9,tied:14,time:[1,2,4,5,7,9,10,12],time_point:[7,9],timecours:9,timepoint:[2,5,9],timepoints_i:5,timeseri:2,timeshift_isc:1,timestamp:9,timing_fil:9,tissu:7,titl:10,togeth:[4,7,9],tohka:1,token:11,tol:7,toler:[1,3,7,14],tolerate_nan:1,toml:10,too:[4,7],tool:[7,9,11,12,14],toolkit:10,top:[3,4],topograph:[1,3,10,14],topolog:10,total:[3,9,10],total_tim:9,towncrier:10,tr_durat:9,tr_ratio:3,tr_solver:3,track:10,trail:6,train:[2,4,5,7],training_data_:4,transact:7,transfer:[2,7],transform:[1,5,7,9,10,14],transform_subject:5,transformermixin:[5,7],transit:2,transpos:[4,9],travi:10,treat:[7,9],trf:3,tri:9,trial:6,triangl:[1,4,14],triangular:[7,9],trick:4,triplet:9,trs:3,truli:4,truncat:7,trust:3,ts0:7,tune:9,tupl:[1,3,4,8,9],turek2016:5,turek2017:5,turek:[3,5],turk:[3,4,5],turn:7,tutori:[10,14],tw_i:5,tweak:14,twice:9,twine:10,two:[1,4,7,9],txt:10,type:[1,2,3,4,5,6,7,8,9,10],typic:[5,7,9,10],ubuntu:12,unbar:7,unbias:4,unchang:7,under:[5,7,9],underestim:7,underli:7,undershoot:9,undershoot_delai:9,undershoot_dispers:9,undershoot_scal:9,understand:[9,10],understood:10,unif:7,uniform:[6,7],union:1,uniqu:[2,3,9],unique_r:3,uniquelabelconditionspec:4,unit:[7,9,10],univari:9,unknown:7,unlabel:2,unless:7,unrel:7,unreproduc:4,unsupervis:[5,7],untangl:1,until:[10,12],updat:[10,12,14],upgrad:11,upload:10,upper:[1,3,4,7,9],upper_ratio:3,upstream:10,uri:2,url:14,usabl:[9,10],usable_cpu_count:9,usag:[4,7,10,11,14],use:[1,2,3,4,7,9,10,11,12,14],used:[1,2,3,4,5,7,8,9,10,11,12],useful:[9,11],user:[7,8,9,10,12],uses:[2,4,9,12],using:[1,2,4,5,7,8,9,10,11,12],usr:12,usual:[1,9,10],util:[0,1,2,11,13,14],v_i:9,valid:[4,7,14],valu:[1,2,3,4,5,6,7,8,9,10,14],valueerror:[1,6],var_db:9,vari:[5,7],variabl:[1,3,4,6,7,9,10,12],varianc:[2,3,5,7,9,14],variat:7,variou:9,vector:[1,4,7,9,14],vectorize_isfc:1,vectorized_isfc:1,venv:[10,12],verbos:[3,11],veri:[7,9,10],versa:1,versatil:1,version:[5,7,10,12,14],vertic:[1,8],via:[4,10,14],vice:1,virtual:10,visibl:10,vision:[1,6],visit:11,visual:7,vlaue:3,vol:3,volum:[2,5,8,9],volume_sign:9,voxel:[1,2,3,4,5,7,8,9,14],voxel_fn:8,voxel_id:4,voxel_ratio:3,voxel_s:9,voxel_unit:4,voxels_i:[3,5],voxelselector:[0,1,11,13],voxelwis:[4,9],vulner:7,w_i:5,wai:[4,7,9,12],wait:10,wang2015:4,wang:[3,4,5],want:[7,9,10,11],warn:10,warrant:9,watch:1,webkit:10,weight:[2,3,4,7,9,14],weight_method:3,welcom:11,well:[1,7,9,10],welvaert:9,were:[7,10],what:[7,9,10],whatev:10,wheel:12,when:[1,3,4,7,9,10],whenev:[7,10,11],where:[1,4,6,7,9,10],whether:[1,7,9],which:[1,2,4,7,8,9,10,12],white:[7,9],who:10,whole:[4,7],whose:7,why:9,wide:9,width:[3,7],widths_mean_var:3,wiesel:1,willk:[3,4,5],wilson:1,window:[1,11],wip:10,wise:[1,7,9],wish:[9,10],within:[3,4,7,8,9],without:[1,2,7,10,11,14],won:[7,9],word:7,work:[1,3,4,6,7,9,10,12],worker:4,workflow:10,workshop:3,wors:4,would:[7,9],wrap:4,wrapper:10,write:4,written:7,wrong:10,wrt:4,x0_:7,x0_null_:7,x_0:7,x_i:[4,5],x_j:4,x_scale:3,xcode:12,xeon:4,xia:[3,5],y_i:[4,5],y_invk_i:7,y_j:4,y_pred:4,yale:9,yamin:6,yank:11,yeshurun:[1,5],yida:[3,4,5],yield:[1,5,9],yoshua:6,you:[1,7,8,9,10,11,12],your:[7,9,10,11,12,14],yourgithubusernam:10,yourself:10,z_i:5,zadbood:2,zero:[1,4,7,9,14],zhu:[3,5],zscore:7},titles:["API","brainiak package","brainiak.eventseg package","brainiak.factoranalysis package","brainiak.fcma package","brainiak.funcalign package","brainiak.hyperparamopt package","brainiak.reprsimil package","brainiak.searchlight package","brainiak.utils package","Contributing","Brain Imaging Analysis Kit","Installation","brainiak","Release notes"],titleterms:{analysi:11,api:0,brain:11,brainiak:[0,1,2,3,4,5,6,7,8,9,13,14],brsa:7,bugfix:14,cite:11,classifi:4,conda:12,content:11,contribut:[10,11],cython_bla:4,deprec:14,docker:11,document:[11,14],event:2,eventseg:2,exampl:11,factoranalysi:3,fcma:4,featur:14,fmrisim:9,folder:10,funcalign:5,goal:10,how:10,hpo:6,htfa:3,hyperparamopt:6,imag:[1,11],improv:14,indic:11,instal:12,isc:1,kit:11,layout:10,linux:12,maco:12,make:10,modul:[1,2,3,4,5,6,7,8,9],mvpa_voxelselector:4,note:14,packag:[1,2,3,4,5,6,7,8,9],preprocess:4,quickstart:11,releas:[10,14],remov:14,reprsimil:7,requir:12,rsrm:5,searchlight:8,sourc:12,srm:5,sssrm:5,standard:10,submodul:[1,2,3,4,5,6,7,8,9],subpackag:1,support:11,tabl:11,test:10,tfa:3,tool:10,upgrad:12,util:[4,9],voxelselector:4,yank:14}})