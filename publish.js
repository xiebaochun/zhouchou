require(`shelljs/global`);
cd('dest');
exec('git add .');
if(exec('git commit -m "update"').code !==0){
	echo(`Error: Git commit master failed`);
    exit(1);
}
if (exec(`git push origin master`).code !== 0) {
	echo(`Error: Git push master failed`);
	exit(1);
}
echo(`------------ master updated`);
cd('..');
if(exec('node push').code !==0){
	echo('push failed');
	exit(1);
};
echo('back up source branch success');