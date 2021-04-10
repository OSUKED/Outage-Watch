call cd ..
call conda activate outage
call python setup.py sdist bdist_wheel
call twine upload --skip-existing dist/*
pause