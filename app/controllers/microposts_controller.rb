class MicropostsController < ApplicationController
     before_action :logged_in_user, only: [:create, :destroy, :index]
     before_action :correct_user,   only: :destroy

  def index
    @micropost = current_user.microposts.build
    @feed_items = current_user.feed.paginate(page: params[:page])
  end

  def create
        @micropost = current_user.microposts.build(micropost_params)
    if @micropost.save
      redirect_to microposts_path
      flash[:success] = "Micropost created!"
    else
      @feed_items =  current_user.feed.paginate(page: params[:page])
      render action: "index"
    end
  end

  def destroy
    @micropost.destroy
    flash[:success] = "Micropost deleted"
    redirect_to request.referrer || microposts_path
  end

   private

    def micropost_params
      params.require(:micropost).permit(:content, :picture)
    end

    def correct_user
      @micropost = current_user.microposts.find_by(id: params[:id])
      redirect_to microposts_path if @micropost.nil?
    end

end
