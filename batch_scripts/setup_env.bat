call cd ..
call conda env create -f environment.yml
call conda activate outage
call ipython kernel install --user --name=outage
pause