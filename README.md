#Ballpark Web View Boilerplate Demo

Sample ExpressJS app to facilitate local development of web views for the Ballpark App.  For demo purposes only.

<summary><b>Project Structure</b></summary><p>

    |-- images                  Client side images
    |-- scripts                 Client side scripts
    	|--	bam-hooks.js		Hooks for use with Ballpark App
		|-- startup.js			Custom code
    |-- styles                  Client side css
    |-- app.js          		node app fpr local development
    |-- index.html      		Landing Page

</p>

<summary><b>Quick start</b></summary><p>

Clone Repository (substitute *YOUR-NAME* with your actual name):

	git clone git@github.com:MajorLeagueBaseball/ballpark-boilerplate-demo.git YOUR-NAME

Install dependencies:

	cd YOUR-NAME
	npm install

Start the server:

    npm start

Now have a look at:

* [http://localhost:3000/](http://localhost:3000/)

</p>

<summary><b>Sample Headers for Development</b></summary><p>

In the index.html file you can use the following header values for local development.  These will be updated with real values when used inside of a web view:

	    <!-- begin: test headers -->
		<script type="text/javascript">
			var bamHeaders = {
				"x-mlbam-cis": "abc",
				"x-mlbam-guid": "def",
				"x-mlbam-vid": "ghi",
				"x-mlbam-wuid": "jkl"
			}
		</script>
        <!-- end: test headers -->