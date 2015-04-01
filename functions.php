<?php
	
class react_ang_theme {
	
	function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, '__react_ang_scripts' ) );
	}
	
	function __react_ang_scripts() {
		
		wp_enqueue_script( 'react_ang_main', get_template_directory_uri().'/build/js/react_angular.min.js', array( 'jquery' ), null, false );
		
		wp_localize_script( 'react_ang_main', 'ajaxInfo', 
			array( 
				'json_url' => get_bloginfo('wpurl').'/wp-json/', 
				'template_directory' => get_template_directory_uri()
			) 
		);
		
		wp_enqueue_script( 'react_app', get_template_directory_uri().'/build/js/react_app.js', array( 'react_ang_main' ), null, true );
		wp_enqueue_script( 'scripts', get_template_directory_uri().'/build/js/scripts.js', array( 'react_ang_main' ), null, false );
		
		wp_enqueue_style( 'styles', get_template_directory_uri().'/build/css/styles.css', array(), null, 'all' );
		
	}
}


new react_ang_theme();
	
?>