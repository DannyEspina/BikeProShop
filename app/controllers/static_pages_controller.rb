class StaticPagesController < ApplicationController
  def home
  end

  def featured
  end

  def parts
  end

  def accessories
  end

  def gallery
    ImageOptimizer.new('/Users/dannyespina/Sites/www/BikeProShop/app/assets/images/Gallery/accounting.JPG', quality: 80).optimize
  end

  def repair
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      if user.activated?
        log_in user
        params[:session][:remember_me] == '1' ? remember(user) : forget(user)
        redirect_back_or user
      else
        message  = "Account not activated. "
        message += "Check your email for the activation link."
        flash[:warning] = message
        redirect_to root_url
      end
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'home'
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to root_url
  end

end
