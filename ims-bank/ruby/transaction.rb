class Transaction < ApplicationRecord
  belongs_to :bank
  belongs_to :customer
end
