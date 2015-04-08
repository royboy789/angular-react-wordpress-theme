<?php
	
class react_ang_theme {
	
	function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, '__react_ang_scripts' ) );
		add_action( 'print_scripts', array( $this, '_react_ang_print_scripts' ) );
	}
	
	function __react_ang_scripts() {
		
		wp_enqueue_script( 'react_ang_main', get_template_directory_uri().'/build/js/react_angular.min.js', array( 'jquery' ), null, true );
		
		wp_localize_script( 'react_ang_main', 'ajaxInfo', 
			array( 
				'json_url' => get_bloginfo('wpurl').'/wp-json/',
				'nonce' => wp_create_nonce( 'wp_json' ),
				'template_directory' => get_template_directory_uri(),
				'site_url' => get_bloginfo('wpurl')
			) 
		);
		
		wp_enqueue_script( 'react_app', get_template_directory_uri().'/build/js/react_app_js.js', array( 'react_ang_main' ), null, true );
		wp_enqueue_script( 'bootstrap', get_template_directory_uri().'/build/js/bootstrap.js', array( 'jquery' ), null, true );
		wp_enqueue_script( 'scripts', get_template_directory_uri().'/build/js/scripts.js', array( 'bootstrap' ), null, true );
		
		wp_enqueue_style( 'styles', get_template_directory_uri().'/build/css/styles.css', array(), null, 'all' );
		
	}
	
	function _react_ang_print_scripts() {
		wp_enqueue_script( 'tiny_mce' );	
	}
}


new react_ang_theme();
	
?>